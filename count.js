jQuery(document).ready(function() {

    let mineralsNeedRecalculation = true;
    
    var mineralsToMine = {};

    const minerals = [
        'tri',
        'pye',
        'mex',
        'iso',
        'noc',
        'zyd',
        'meg',
        'mor',
    ];

    const ores = [
        'mer',
        'ark',
        'bis',
        'cro',
        'och',
        'gne',
        'spo',
        'hed',
        'hem',
        'jas',
        'ker',
        'omb',
        'pla',
        'pyr',
        'sco',
        'vel',
    ];
    
    const mineralQuantity = {
        tri: 0,
        pye: 0,
        mex: 0,
        iso: 0,
        noc: 0,
        zyd: 0,
        meg: 0,
        mor: 0,
    };

    const whichOreToMine = {
        tri: 'spo',
        pye: 'spo',
        mex: 'gne',
        iso: 'och',
        noc: 'cro',
        zyd: 'bis',
        meg: 'ark',
        mor: 'mer',
    };

    let oreData = {};

    const oreInfo = {
        mer: {
            name: 'Mercoxit',
            volume: 40,
            minerals: {
                tri: 0,
                pye: 0,
                mex: 0,
                iso: 0,
                noc: 0,
                zyd: 0,
                meg: 0,
                mor: 300,
            }
        },
        ark: {
            name: 'Arkonor',
            volume: 16,
            minerals: {
                tri: 22000,
                pye: 0,
                mex: 2500,
                iso: 0,
                noc: 0,
                zyd: 0,
                meg: 320,
                mor: 0,
            }
        },
        bis: {
            name: 'Bistot',
            volume: 16,
            minerals: {
                tri: 0,
                pye: 12000,
                mex: 0,
                iso: 0,
                noc: 0,
                zyd: 450,
                meg: 100,
                mor: 0,
            }
        },
        cro: {
            name: 'Crokite',
            volume: 16,
            minerals: {
                tri: 21000,
                pye: 0,
                mex: 0,
                iso: 0,
                noc: 760,
                zyd: 135,
                meg: 0,
                mor: 0,
            }
        },
        och: {
            name: 'Dark Ochre',
            volume: 8,
            minerals: {
                tri: 10000,
                pye: 0,
                mex: 0,
                iso: 1600,
                noc: 120,
                zyd: 0,
                meg: 0,
                mor: 0,
            }
        },
        gne: {
            name: 'Gneiss',
            volume: 5,
            minerals: {
                tri: 0,
                pye: 2200,
                mex: 2400,
                iso: 300,
                noc: 0,
                zyd: 0,
                meg: 0,
                mor: 0,
            }
        },
        hed: {
            name: 'Hedbergite',
            volume: 3,
            minerals: {
                tri: 0,
                pye: 1000,
                mex: 0,
                iso: 200,
                noc: 100,
                zyd: 19,
                meg: 0,
                mor: 0,
            }
        },
        hem: {
            name: 'Hemorphite',
            volume: 3,
            minerals: {
                tri: 2200,
                pye: 0,
                mex: 0,
                iso: 100,
                noc: 120,
                zyd: 15,
                meg: 0,
                mor: 0,
            }
        },
        jas: {
            name: 'Jaspet',
            volume: 2,
            minerals: {
                tri: 0,
                pye: 0,
                mex: 350,
                iso: 0,
                noc: 75,
                zyd: 8,
                meg: 0,
                mor: 0,
            }
        },
        ker: {
            name: 'Kernite',
            volume: 1.2,
            minerals: {
                tri: 134,
                pye: 0,
                mex: 267,
                iso: 134,
                noc: 0,
                zyd: 0,
                meg: 0,
                mor: 0,
            }
        },
        omb: {
            name: 'Omber',
            volume: 0.6,
            minerals: {
                tri: 800,
                pye: 100,
                mex: 0,
                iso: 85,
                noc: 0,
                zyd: 0,
                meg: 0,
                mor: 0,
            }
        },
        pla: {
            name: 'Plagioclase',
            volume: 0.35,
            minerals: {
                tri: 107,
                pye: 213,
                mex: 107,
                iso: 0,
                noc: 0,
                zyd: 0,
                meg: 0,
                mor: 0,
            }
        },
        pyr: {
            name: 'Pyroxeres',
            volume: 0.3,
            minerals: {
                tri: 351,
                pye: 25,
                mex: 50,
                iso: 0,
                noc: 5,
                zyd: 0,
                meg: 0,
                mor: 0,
            }
        },
        sco: {
            name: 'Scordite',
            volume: 0.15,
            minerals: {
                tri: 346,
                pye: 173,
                mex: 0,
                iso: 0,
                noc: 0,
                zyd: 0,
                meg: 0,
                mor: 0,
            }
        },
        spo: {
            name: 'Spodumain',
            volume: 16,
            minerals: {
                tri: 56000,
                pye: 12050,
                mex: 2100,
                iso: 450,
                noc: 0,
                zyd: 0,
                meg: 0,
                mor: 0,
            }
        },
        vel: {
            name: 'Veldspar',
            volume: 0.1,
            minerals: {
                tri: 415,
                pye: 0,
                mex: 0,
                iso: 0,
                noc: 0,
                zyd: 0,
                meg: 0,
                mor: 0,
            }
        },
    };

    // ========================================================================
    // ========================================================================

    function checkCookie(name) {
        return Cookies.get(name) != null;
    }

    function getSkill() {
        return checkCookie('skill') ? Cookies.get('skill') : 50;
    }

    function showSkill(skill) {
        $('#skill-input').val(skill + '%');
    }

    function recalculateMinerals(skill) {
        let oreData = {}
        for (ore in oreInfo) {
            if (oreInfo.hasOwnProperty(ore)) {

                oreData[ore] = {};
                oreData[ore].minerals = {};

                for (mineral in oreInfo[ore].minerals) {
                    if (oreInfo[ore].minerals.hasOwnProperty(mineral)) {

                        oreData[ore].minerals[mineral] = oreInfo[ore].minerals[mineral] * (skill / 100);

                    }
                }

            }
        }
        return oreData;
    }

    function setCookie(name, value) {
        return Cookies.set(name, value);
    }

    function reload() {
        init();
    }

    function fillTable() {
        for (let i = 0; i < ores.length; i++) {
            let ore = ores[i];

            for (let i = 0; i < minerals.length; i++) {
                let mineral = minerals[i];

                if (oreData[ore].minerals[mineral] > 0) {
                    let mineralsPerMeter = oreData[ore].minerals[mineral] / 100 / oreInfo[ore].volume;
                    $('#minerals .' + ore + ' .' + mineral + ' .base').html(mineralsPerMeter.toFixed(3));
                    if (whichOreToMine[mineral] === ore) {
                        $('#minerals .' + ore + ' .' + mineral).addClass('accent').removeClass('active');
                    }
                }

            }

        }
    }      

    // ========================================================================
    // ========================================================================

    function perm(xs) {

        let result = [];
        let l = xs.length;

        for (let i = 0; i < l; i++) {

            let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));

            if (!rest.length) {
                result.push([xs[i]]);
            } else {
                for (let j = 0; j < rest.length; j = j + 1) {
                    result.push([xs[i]].concat(rest[j]));
                }
            }
        }

        return result;
    }

    function clearMineralQuantity() {
        for (let mineral in mineralQuantity) {
            if (mineralQuantity.hasOwnProperty(mineral)) {
                mineralQuantity[mineral] = 0;
            }
        }
    }

    function clearOreQuantity() {
        for (let ore in oreData) {
            if (oreData.hasOwnProperty(ore)) {
                oreData[ore].quantity = 0;
            }
        }
    }

    function getBlocksToMine(ore, mineral) {
        let mineralsInBlock = oreData[ore].minerals[mineral];
        return Math.ceil((mineralsToMine[mineral] - mineralQuantity[mineral]) / mineralsInBlock);
    }

    function mineOre(ore, blocksToMine) {
        for (let mineral in oreData[ore].minerals) {
            if (oreData[ore].minerals.hasOwnProperty(mineral) && oreData[ore].minerals[mineral] > 0) {
                let mineralsInBlock = oreData[ore].minerals[mineral];
                mineralQuantity[mineral] += blocksToMine * mineralsInBlock;
            }
        }
    }

    function countMinerals(mineralsCombination) {
        clearMineralQuantity();
        clearOreQuantity();
        let l = mineralsCombination.length;
        for (let i = 0; i < l; i++) {
            let mineral = mineralsCombination[i];
            if (mineralsToMine.hasOwnProperty(mineral) && mineralQuantity[mineral] < mineralsToMine[mineral]) {
                let ore = whichOreToMine[mineral];
                let blocksToMine = getBlocksToMine(ore, mineral);
                oreData[ore].quantity += blocksToMine;
                mineOre(ore, blocksToMine);
            }
        }
    }

    function checkVolume() {
        let generalVolume = 0;
    
        for (let ore in oreData) {
            if (oreData.hasOwnProperty(ore)) {
                generalVolume += oreData[ore].quantity * oreInfo[ore].volume * 100;
            }
        }

        return generalVolume;
    }

    function findBestCombination() {
        let mineralTypes = minerals.filter(m => mineralsToMine.hasOwnProperty(m));
        let mineralsCombinations = perm(mineralTypes);
        let l = mineralsCombinations.length;
        let minimunVolume = 0;
        let bestCombinaton = [];
        let testVolume = 0;
        for (let i = 0; i < l; i++) {
            let comb = mineralsCombinations[i];
            countMinerals(comb);
            testVolume = checkVolume();
            if (minimunVolume === 0 || testVolume < minimunVolume) {
                minimunVolume = testVolume;
                bestCombinaton = comb;
            }
            testVolume = 0;
        }
        return bestCombinaton;
    }  

    // ========================================================================
    // ========================================================================

    function clearTable() {
        $('#minerals tbody .mineral-input').html('');
        $('#minerals tbody .volume').html('');
        $('#minerals tbody .blocks').html('').removeClass('show-bg');
        $('#minerals tbody .mined').html('');
        $('#minerals tfoot th').html('');
    }

    function showMinerals(ore) {
        for (let i = 0; i < minerals.length; i++) {
            let mineral = minerals[i];
            let mineralsInBlock = oreData[ore].minerals[mineral];
            if (mineralsInBlock > 0) {
                let input = new Intl.NumberFormat().format(Math.ceil(mineralsInBlock * oreData[ore].quantity));
                $('#minerals tbody .' + ore + ' .' + mineral + ' .mined').html(input);
            }
        }
    }

    function showBlocksBg() {
        $('#minerals tbody .blocks').each(function() {
            let text = $(this).text();
            if (text) $(this).addClass('show-bg');
        });
    }

    function showTable(bestCombinaton) {
        for (let i = 0; i < bestCombinaton.length; i++) {
            let mineral = bestCombinaton[i];
            if (mineralsToMine.hasOwnProperty(mineral) && mineralsToMine[mineral] > 0) {
                let ore = whichOreToMine[mineral];
                let oreBlocksQuantity = oreData[ore].quantity;
                if (oreBlocksQuantity > 0) {
                    let oreVolume = oreBlocksQuantity * oreInfo[ore].volume * 100;
                    $('#minerals tbody .' + ore + ' .volume').text(new Intl.NumberFormat().format(oreVolume));
                    $('#minerals tbody .' + ore + ' .blocks').text(new Intl.NumberFormat().format(oreBlocksQuantity));
                    showMinerals(ore);
                }
            }
        }
        showBlocksBg();
    }

    function showGeneralVolume() {
        let generalVolume = 0;
        $('#minerals tbody .volume').each(function() {
            let n = $(this).text().replace(/,|\s/g, '');
            if (!isNaN(parseInt(n))) generalVolume += parseInt(n);
        });
        $('#minerals tfoot .general').text(new Intl.NumberFormat().format(generalVolume));
    }

    function showMineralsQuantity() {
        let quantity = 0;
        for (let mineral in mineralsToMine) {
            if (mineralsToMine.hasOwnProperty(mineral) && mineralsToMine[mineral] > 0) {
                $('#minerals tbody .input .' + mineral).html(new Intl.NumberFormat().format(mineralsToMine[mineral]));
                $('#minerals tbody .' + mineral + ' .mined').each(function() {
                    let n = $(this).text().replace(/,|\s/g, '');
                    if (!isNaN(parseInt(n))) quantity += parseInt(n);
                });
                let rest = quantity - mineralsToMine[mineral];
                if (rest > 0) {
                    $('#minerals tfoot .' + mineral).text(new Intl.NumberFormat().format(rest));
                }
                quantity = 0;
            }
        }
    }

    // ========================================================================
    // ========================================================================

    function init() {

        let skill = getSkill();

        showSkill(skill);

        oreData = recalculateMinerals(skill);
        
        fillTable();

        // ------------------------------------------------
        
        let bestCombinaton = findBestCombination();
        
        // ------------------------------------------------
    
        countMinerals(bestCombinaton);

        clearTable();
    
        showTable(bestCombinaton);
    
        showGeneralVolume();
    
        showMineralsQuantity();

    }

    // ========================================================================
    // ========================================================================

    $('#skill-input').change(function() {
        let skill = $(this).val().replace(/%/g, '').replace(/\s+/g, '');
        setCookie('skill', skill);
        reload();
    });

    $('#minerals .selection.active').click(function() {
        let mineral = $(this).data('mineral');
        let ore = $(this).data('ore');
        whichOreToMine[mineral] = ore;
        $('#minerals tbody .' + mineral + '.selection').removeClass('accent').addClass('active');
        reload();
    });

    $('#minerals .mineral-input').click(function() {
        let el = $(this);
        let val = $(this).text() ? parseInt($(this).text().replace(/,|\s/g, '')) : '';
        if ($(el).data('inputIsActive') === 'no') {
            el.data('inputIsActive', 'yes');
            el.addClass('active');
            el.html('<input type="text" value="' + val + '" id="mineral-input" autofocus="autofocus">');
            $('#mineral-input').focus();
            $('#mineral-input').blur(function() {
                el.data('inputIsActive', 'no');
                el.removeClass('active').text(new Intl.NumberFormat().format(val));
            });
            $('#mineral-input').keypress(function(event) {
                if (event.key === 'Enter') {
                    let newVal = $(this).val();
                    el.data('inputIsActive', 'no');
                    el.removeClass('active').text(new Intl.NumberFormat().format(newVal));
                    let mineral = el.data('mineral');
                    mineralsToMine[mineral] = newVal;
                    reload();
                }
            });
        }
    });
    
    $('#textarea').change(function() {

        let pars = $('#textarea').val().split(/\r?\n/g);

        for (let i = 0; i < pars.length; i++) {
            if (pars[i] === '') {
                delete pars[i];
            } else {
                pars[i] = pars[i].split(/\t/);
                let mineral = pars[i][1].substring(0, 3).toLowerCase();
                let quantity = parseInt(pars[i][0]);
                if (quantity > 0) {
                    mineralsToMine[mineral] = quantity;
                }
            }
        }

        reload();

    });

    // ========================================================================
    // ========================================================================

    init();

});