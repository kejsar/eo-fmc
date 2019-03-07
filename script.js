jQuery(document).ready(function() {

    var minerals = {
        tri: {
            name: 'Trit­anium',
            id: 34
        },
        pye: {
            name: 'Pye­rite',
            id: 35
        },
        mex: {
            name: 'Mex­allon',
            id: 36
        },
        iso: {
            name: 'Iso­gen',
            id: 37
        },
        noc: {
            name: 'Noc­xium',
            id: 38
        },
        zyd: {
            name: 'Zyd­rine',
            id: 39
        },
        meg: {
            name: 'Meg­acyte',
            id: 40
        },
        mor: {
            name: 'Mor­phite',
            id: 11399
        },
    }

    var oreData = {
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
    }

    var oreList = {

        11396: {name: 'Mercoxit', compressed: false, group: 'mer', base: true, rich: 0},
        17869: {name: 'Magma Mercoxit', compressed: false, group: 'mer', base: false, rich: 5},
        17870: {name: 'Vitreous Mercoxit', compressed: false, group: 'mer', base: false, rich: 10},
        28413: {name: 'Compressed Mercoxit', compressed: true, group: 'mer', base: true, rich: 0},
        28412: {name: 'Compressed Magma Mercoxit', compressed: true, group: 'mer', base: false, rich: 5},
        28414: {name: 'Compressed Vitreous Mercoxit', compressed: true, group: 'mer', base: false, rich: 10},

        22:    {name: 'Arkonor', compressed: false, group: 'ark', base: true, rich: 0},
        17425: {name: 'Crimson Arkonor', compressed: false, group: 'ark', base: false, rich: 5},
        17426: {name: 'Prime Arkonor', compressed: false, group: 'ark', base: false, rich: 10},
        46678: {name: 'Flawless Arkonor', compressed: false, group: 'ark', base: false, rich: 15},
        28367: {name: 'Compressed Arkonor', compressed: true, group: 'ark', base: true, rich: 0},
        28385: {name: 'Compressed Crimson Arkonor', compressed: true, group: 'ark', base: false, rich: 5},
        28387: {name: 'Compressed Prime Arkonor', compressed: true, group: 'ark', base: false, rich: 10},
        46691: {name: 'Compressed Flawless Arkonor', compressed: true, group: 'ark', base: false, rich: 15},

        1223:  {name: 'Bistot', compressed: false, group: 'bis', base: true, rich: 0},
        17428: {name: 'Triclinic Bistot', compressed: false, group: 'bis', base: false, rich: 5},
        17429: {name: 'Monoclinic Bistot', compressed: false, group: 'bis', base: false, rich: 10},
        46676: {name: 'Cubic Bistot', compressed: false, group: 'bis', base: false, rich: 15},
        28388: {name: 'Compressed Bistot', compressed: true, group: 'bis', base: true, rich: 0},
        28390: {name: 'Compressed Triclinic Bistot', compressed: true, group: 'bis', base: false, rich: 5},
        28389: {name: 'Compressed Monoclinic Bistot', compressed: true, group: 'bis', base: false, rich: 10},
        46692: {name: 'Compressed Cubic Bistot', compressed: true, group: 'bis', base: false, rich: 15},

        1225:  {name: 'Crokite', compressed: false, group: 'cro', base: true, rich: 0},
        17432: {name: 'Sharp Crokite', compressed: false, group: 'cro', base: false, rich: 5},
        17433: {name: 'Crystalline Crokite', compressed: false, group: 'cro', base: false, rich: 10},
        46677: {name: 'Pellucid Crokite', compressed: false, group: 'cro', base: false, rich: 15},
        28391: {name: 'Compressed Crokite', compressed: true, group: 'cro', base: true, rich: 0},
        28393: {name: 'Compressed Sharp Crokite', compressed: true, group: 'cro', base: false, rich: 5},
        28392: {name: 'Compressed Crystalline Crokite', compressed: true, group: 'cro', base: false, rich: 10},
        46693: {name: 'Compressed Pellucid Crokite', compressed: true, group: 'cro', base: false, rich: 15},

        1232:  {name: 'Dark Ochre', compressed: false, group: 'och', base: true, rich: 0},
        17436: {name: 'Onyx Ochre', compressed: false, group: 'och', base: false, rich: 5},
        17437: {name: 'Obsidian Ochre', compressed: false, group: 'och', base: false, rich: 10},
        46675: {name: 'Jet Ochre', compressed: false, group: 'och', base: false, rich: 15},
        28394: {name: 'Compressed Dark Ochre', compressed: true, group: 'och', base: true, rich: 0},
        28396: {name: 'Compressed Onyx Ochre', compressed: true, group: 'och', base: false, rich: 5},
        28395: {name: 'Compressed Obsidian Ochre', compressed: true, group: 'och', base: false, rich: 10},
        46694: {name: 'Compressed Jet Ochre', compressed: true, group: 'och', base: false, rich: 15},

        1229:  {name: 'Gneiss', compressed: false, group: 'gne', base: true, rich: 0},
        17865: {name: 'Iridescent Gneiss', compressed: false, group: 'gne', base: false, rich: 5},
        17866: {name: 'Prismatic Gneiss', compressed: false, group: 'gne', base: false, rich: 10},
        46679: {name: 'Brilliant Gneiss', compressed: false, group: 'gne', base: false, rich: 15},
        28397: {name: 'Compressed Gneiss', compressed: true, group: 'gne', base: true, rich: 0},
        28398: {name: 'Compressed Iridescent Gneiss', compressed: true, group: 'gne', base: false, rich: 5},
        28399: {name: 'Compressed Prismatic Gneiss', compressed: true, group: 'gne', base: false, rich: 10},
        46695: {name: 'Compressed Brilliant Gneiss', compressed: true, group: 'gne', base: false, rich: 15},

        21:    {name: 'Hedbergite', compressed: false, group: 'hed', base: true, rich: 0},
        17440: {name: 'Vitric Hedbergite', compressed: false, group: 'hed', base: false, rich: 5},
        17441: {name: 'Glazed Hedbergite', compressed: false, group: 'hed', base: false, rich: 10},
        46680: {name: 'Lustrous Hedbergite', compressed: false, group: 'hed', base: false, rich: 15},
        28401: {name: 'Compressed Hedbergite', compressed: true, group: 'hed', base: true, rich: 0},
        28402: {name: 'Compressed Vitric Hedbergite', compressed: true, group: 'hed', base: false, rich: 5},
        28400: {name: 'Compressed Glazed Hedbergite', compressed: true, group: 'hed', base: false, rich: 10},
        46696: {name: 'Compressed Lustrous Hedbergite', compressed: true, group: 'hed', base: false, rich: 15},

        1231:  {name: 'Hemorphite', compressed: false, group: 'hem', base: true, rich: 0},
        17444: {name: 'Vivid Hemorphite', compressed: false, group: 'hem', base: false, rich: 5},
        17445: {name: 'Radiant Hemorphite', compressed: false, group: 'hem', base: false, rich: 10},
        46681: {name: 'Scintillating Hemorphite', compressed: false, group: 'hem', base: false, rich: 15},
        28403: {name: 'Compressed Hemorphite', compressed: true, group: 'hem', base: true, rich: 0},
        28405: {name: 'Compressed Vivid Hemorphite', compressed: true, group: 'hem', base: false, rich: 5},
        28404: {name: 'Compressed Radiant Hemorphite', compressed: true, group: 'hem', base: false, rich: 10},
        46697: {name: 'Compressed Scintillating Hemorphite', compressed: true, group: 'hem', base: false, rich: 15},

        1226:  {name: 'Jaspet', compressed: false, group: 'jas', base: true, rich: 0},
        17448: {name: 'Pure Jaspet', compressed: false, group: 'jas', base: false, rich: 5},
        17449: {name: 'Pristine Jaspet', compressed: false, group: 'jas', base: false, rich: 10},
        46682: {name: 'Immaculate Jaspet', compressed: false, group: 'jas', base: false, rich: 15},
        28406: {name: 'Compressed Jaspet', compressed: true, group: 'jas', base: true, rich: 0},
        28408: {name: 'Compressed Pure Jaspet', compressed: true, group: 'jas', base: false, rich: 5},
        28407: {name: 'Compressed Pristine Jaspet', compressed: true, group: 'jas', base: false, rich: 10},
        46698: {name: 'Compressed Immaculate Jaspet', compressed: true, group: 'jas', base: false, rich: 15},

        20:    {name: 'Kernite', compressed: false, group: 'ker', base: true, rich: 0},
        17452: {name: 'Luminous Kernite', compressed: false, group: 'ker', base: false, rich: 5},
        17453: {name: 'Fiery Kernite', compressed: false, group: 'ker', base: false, rich: 10},
        46683: {name: 'Resplendant Kernite', compressed: false, group: 'ker', base: false, rich: 15},
        28410: {name: 'Compressed Kernite', compressed: true, group: 'ker', base: true, rich: 0},
        28411: {name: 'Compressed Luminous Kernite', compressed: true, group: 'ker', base: false, rich: 5},
        28409: {name: 'Compressed Fiery Kernite', compressed: true, group: 'ker', base: false, rich: 10},
        46699: {name: 'Compressed Resplendant Kernite', compressed: true, group: 'ker', base: false, rich: 15},

        1227:  {name: 'Omber', compressed: false, group: 'omb', base: true, rich: 0},
        17867: {name: 'Silvery Omber', compressed: false, group: 'omb', base: false, rich: 5},
        17868: {name: 'Golden Omber', compressed: false, group: 'omb', base: false, rich: 10},
        46684: {name: 'Platinoid Omber', compressed: false, group: 'omb', base: false, rich: 15},
        28416: {name: 'Compressed Omber', compressed: true, group: 'omb', base: true, rich: 0},
        28417: {name: 'Compressed Silvery Omber', compressed: true, group: 'omb', base: false, rich: 5},
        28415: {name: 'Compressed Golden Omber', compressed: true, group: 'omb', base: false, rich: 10},
        46700: {name: 'Compressed Platinoid Omber', compressed: true, group: 'omb', base: false, rich: 15},

        18:    {name: 'Plagioclase', compressed: false, group: 'pla', base: true, rich: 0},
        17455: {name: 'Azure Plagioclase', compressed: false, group: 'pla', base: false, rich: 5},
        17456: {name: 'Rich Plagioclase', compressed: false, group: 'pla', base: false, rich: 10},
        46685: {name: 'Sparkling Plagioclase', compressed: false, group: 'pla', base: false, rich: 15},
        28422: {name: 'Compressed Plagioclase', compressed: true, group: 'pla', base: true, rich: 0},
        28421: {name: 'Compressed Azure Plagioclase', compressed: true, group: 'pla', base: false, rich: 5},
        28423: {name: 'Compressed Rich Plagioclase', compressed: true, group: 'pla', base: false, rich: 10},
        46701: {name: 'Compressed Sparkling Plagioclase', compressed: true, group: 'pla', base: false, rich: 15},

        1224:  {name: 'Pyroxeres', compressed: false, group: 'pyr', base: true, rich: 0},
        17459: {name: 'Solid Pyroxeres', compressed: false, group: 'pyr', base: false, rich: 5},
        17460: {name: 'Viscous Pyroxeres', compressed: false, group: 'pyr', base: false, rich: 10},
        46686: {name: 'Opulent Pyroxeres', compressed: false, group: 'pyr', base: false, rich: 15},
        28424: {name: 'Compressed Pyroxeres', compressed: true, group: 'pyr', base: true, rich: 0},
        28425: {name: 'Compressed Solid Pyroxeres', compressed: true, group: 'pyr', base: false, rich: 5},
        28426: {name: 'Compressed Viscous Pyroxeres', compressed: true, group: 'pyr', base: false, rich: 10},
        46702: {name: 'Compressed Opulent Pyroxeres', compressed: true, group: 'pyr', base: false, rich: 15},

        1228:  {name: 'Scordite', compressed: false, group: 'sco', base: true, rich: 0},
        17463: {name: 'Condensed Scordite', compressed: false, group: 'sco', base: false, rich: 5},
        17464: {name: 'Massive Scordite', compressed: false, group: 'sco', base: false, rich: 10},
        46687: {name: 'Glossy Scordite', compressed: false, group: 'sco', base: false, rich: 15},
        28429: {name: 'Compressed Scordite', compressed: true, group: 'sco', base: true, rich: 0},
        28427: {name: 'Compressed Condensed Scordite', compressed: true, group: 'sco', base: false, rich: 5},
        28428: {name: 'Compressed Massive Scordite', compressed: true, group: 'sco', base: false, rich: 10},
        46703: {name: 'Compressed Glossy Scordite', compressed: true, group: 'sco', base: false, rich: 15},

        19:    {name: 'Spodumain', compressed: false, group: 'spo', base: true, rich: 0},
        17466: {name: 'Bright Spodumain', compressed: false, group: 'spo', base: false, rich: 5},
        17467: {name: 'Gleaming Spodumain', compressed: false, group: 'spo', base: false, rich: 10},
        46688: {name: 'Dazzling Spodumain', compressed: false, group: 'spo', base: false, rich: 15},
        28420: {name: 'Compressed Spodumain', compressed: true, group: 'spo', base: true, rich: 0},
        28418: {name: 'Compressed Bright Spodumain', compressed: true, group: 'spo', base: false, rich: 5},
        28419: {name: 'Compressed Gleaming Spodumain', compressed: true, group: 'spo', base: false, rich: 10},
        46704: {name: 'Compressed Dazzling Spodumain', compressed: true, group: 'spo', base: false, rich: 15},

        1230:  {name: 'Veldspar', compressed: false, group: 'vel', base: true, rich: 0},
        17470: {name: 'Concentrated Veldspar', compressed: false, group: 'vel', base: false, rich: 5},
        17471: {name: 'Dense Veldspar', compressed: false, group: 'vel', base: false, rich: 10},
        46689: {name: 'Stable Veldspar', compressed: false, group: 'vel', base: false, rich: 15},
        28432: {name: 'Compressed Veldspar', compressed: true, group: 'vel', base: true, rich: 0},
        28430: {name: 'Compressed Concentrated Veldspar', compressed: true, group: 'vel', base: false, rich: 5},
        28431: {name: 'Compressed Dense Veldspar', compressed: true, group: 'vel', base: false, rich: 10},
        46705: {name: 'Compressed Stable Veldspar', compressed: true, group: 'vel', base: false, rich: 15},
    };


    // ==============================

    
    var compressed = true;
    var riched = false;

    function sortTable(col) {
        var rows = $('#prices tbody tr').get();

        rows.sort(function(a, b) {

            if (col) {
                var x1 = Number($(a).children('td').eq(col).text());
                var x2 = Number($(b).children('td').eq(col).text());
            } else {
                var x1 = $(b).children('td').eq(col).text().toUpperCase();
                var x2 = $(a).children('td').eq(col).text().toUpperCase();
            }

            if (x1 > x2) return -1;

            if (x1 < x2) return 1;

            return 0;

        });

        $.each(rows, function(index, row) {
            $('#prices').children('tbody').append(row);
        });
    }
    
    $('#sn').click(function() {
        sortTable(0);
    });

    $('#su').click(function() {
        sortTable(1);
    });

    $('#sm').click(function() {
        sortTable(2);
    });

    $('#sur').click(function() {
        sortTable(3);
    });

    $('#smr').click(function() {
        sortTable(4);
    });

    $('#compressed').click(function() {
        compressed = true ? false : true;
        showPrices();
    });

    $('#riched').click(function() {
        riched = true ? false : true;
        showPrices();
    });

    $('#recount').click(function() {
        showPrices();
    });

    // ==============================

    function ifCompressed() {
        return $("#compressed").is(':checked');
    }

    function ifRiched() {
        return $("#riched").is(':checked');
    }

    // ==============================

    function getMax(data) {

        var l = data.length;
        var h = 0;
        
        for (var i = 0; i < l; i++) {
            if (data[i].price > h) h = data[i].price;
        }
        
        return h;
    }


    // ==============================

    function setPrices() {
        for (var id in oreList) {
            if (oreList.hasOwnProperty(id)) {
                setPrice(id);
            }
        }
    }

    function setPrice(id) {

        let url = 'https://esi.evetech.net/latest/markets/10000002/orders/?datasource=tranquility&order_type=buy&page=1&type_id=' + id;
        
        $.getJSON(url, function(data) {
            // showPrices(id, getMax(data));
            oreList[id].price = getMax(data);
        }).done(function() {
            if (orePricesIsReady()) showPrices();
        });
    }

    function orePricesIsReady() {

        for (const id in oreList) {
            if (oreList.hasOwnProperty(id)) {

                if (compressed) {
                    if (oreList[id].compressed) {

                        if (riched) {
                            if (!oreList[id].hasOwnProperty('price')) return false;
                        } else {
                            if (oreList[id].base && !oreList[id].hasOwnProperty('price')) return false;
                        }

                    }
                } else {
                    if (riched) {
                        if (!oreList[id].hasOwnProperty('price')) return false;
                    } else {
                        if (oreList[id].base && !oreList[id].hasOwnProperty('price')) return false;
                    }
                }

            } 
        }

        return true;
    }

    function showPrices() {
        
        $('#prices tbody').empty();

        for (const id in oreList) {
            if (oreList.hasOwnProperty(id)) {

                if (compressed) {
                    if (oreList[id].compressed) {
                        if (riched) {
                            formPricesRow(id);
                        } else {
                            if (oreList[id].base) {
                                formPricesRow(id);
                            }
                        }
                    }
                } else {
                    if (riched) {
                        formPricesRow(id);
                    } else {
                        if (oreList[id].base) {
                            formPricesRow(id);
                        }
                    }
                }

            }
        }

        prepareCheckMorePrices();

        sortTable(4);
    }

    function prepareCheckMorePrices() {
        $('#prices tbody td.name').click(function() {
            var id = $(this).attr("id");
            checkMorePrices(id);
        });
    }

    function checkMorePrices(id) {

        let url = 'https://esi.evetech.net/latest/markets/10000002/orders/?datasource=tranquility&order_type=buy&page=1&type_id=' + id;
        
        $.getJSON(url, function(data) {
            var d = getLastFive(data);
            $('#' + id).append("<div><table><tr><th>Quantity</th><th>Price</th></tr></table></div>");
            var max = d.length <= 5 ? d.length : 5;
            for (var i=0; i < max; i++) {
                $('#' + id + ' table').append('<tr><td>' + d[i].volume_remain + '</td><td>' + d[i].price + '</td></div>');
            }
        });
    }

    function getLastFive(data) {
        return data.sort((a, b) => (a.price < b.price) ? 1 : -1);
    }

    function getPrice1(id) {
        return oreList[id].price;
    }

    function getPrice2(id, group) {
        if (oreList[id].compressed) {
            return Math.round(oreList[id].price / 100 / oreData[group].volume);
        } else {
            return Math.round(oreList[id].price / oreData[group].volume);
        }
    }

    function getPrice3(group, rich) {
        var price = 0;
        var skill = $('#skill').val() / 100;

        for (const mineral in oreData[group].minerals) {
            if (oreData[group].minerals.hasOwnProperty(mineral) && oreData[group].minerals[mineral] > 0) {
                price += Math.floor(Math.round((oreData[group].minerals[mineral] / 100) * rich) + oreData[group].minerals[mineral] * skill) * minerals[mineral].price;
            }
        }

        return Math.round(price * 100) / 100;
    }

    function getPrice4(price, group) {
        return Math.round(price / 100 / oreData[group].volume);
    }

    function getPointPosition(arr) {

        for (var i=0; i<arr.length; i++) {
            if (arr[i] === '.') return i;
        }

        return -1;

    }

    function formatAsNumber(str) {

        var arr = str.toString().split('');
        var l, r;

        var x = getPointPosition(arr);

        if (x === arr.length - 1) {
            l = arr.slice(0, x);
            r = ['0', '0'];
        } else if (x > 0) {
            l = arr.slice(0, x);
            r = arr.slice(x+1);
        } else if (x === 0) {
            l = ['0'];
            r = arr.slice(1);
        } else {
            l = arr;
            r = ['0', '0'];
        }

        if (r.length === 1) {
            r.push('0');
        }

        var copy = [];
        l = l.reverse();

        for (var i=0; i<l.length; i++) {

            if (i !== 0 && i % 3 === 0) {
                copy.unshift(' ');
            }

            copy.unshift(l[i]);

        }

        copy.push('.');

        var result = copy.concat(r);

        return result.join("");
    }

    function formPricesRow(id) {

        var group = oreList[id].group;
        var rich = oreList[id].rich;

        var name = oreList[id].name;
        var price1 = getPrice1(id);
        var price2 = getPrice2(id, group);
        var price3 = getPrice3(group, rich);
        var price4 = getPrice4(price3, group);

        $('#prices tbody').append('<tr><td class="name" id="' + id + '">' + name + '</td><td>' + price1.toFixed(2) + '</td><td>' + price2 + '</td><td>' + price3 + '</td><td>' + price4 + '</td></tr>');
    }


    // ==============================

    setMineralPrice();

    function setMineralPrice() {
        for (const prop in minerals) {
            if (minerals.hasOwnProperty(prop)) {
                // console.log(`minerals.${prop} = ${minerals[prop].id}`);
                getMineralPrice(prop, minerals[prop].id);
            } 
        }
    }

    function getMineralPrice(name, id) {

        let url = 'https://esi.evetech.net/latest/markets/10000002/orders/?datasource=tranquility&order_type=buy&page=1&type_id=' + id;
        
        $.getJSON(url, function(data) {
            minerals[name].price = getMax(data);
        }).done(function() {
            if (MineralPricesIsReady()) setPrices();
        });
    }

    function MineralPricesIsReady() {
        for (const prop in minerals) {
            if (minerals.hasOwnProperty(prop)) {
                if (!minerals[prop].hasOwnProperty('price')) return false;
            } 
        }
        return true;
    }

});
