<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300|Roboto:300,400,500,700,900" rel="stylesheet">
    <style>

        body {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
        }

        .flex-container {
            display: flex;
            justify-content: center;
        }

        .flex-container > div {
            padding: 50px;
        }

        table {
            margin: 30px auto;
        }

        caption {
            font-family: 'Montserrat', sans-serif;
            font-weight: 300;
            font-size: 24px;
            border-bottom: 1px solid #ccc;
            padding: 0 0 7px 0;
            margin: 0 0 7px 0;
        }

        table th,
        table td {
            text-align: right;
            padding: 3px 7px;
        }

        p {
            font-weight: 300;
            text-align: right;
        }

        .name {
            font-weight: 700;
        }

        .price {
            text-align: right;
        }

        .isk-m3 {
            font-weight: 900;
        }

        .info {
            font-weight: 300;
        }

        .result {
            font-weight: 500;
        }

        .volume {
            font-weight: 400;
        }

    </style>
</head>
<body>
<div class="flex-container">
    <div>
<?php

function get_price($item_id) {
    $url = 'https://esi.evetech.net/latest/markets/10000002/orders/?datasource=tranquility&order_type=buy&page=1&type_id=' . $item_id;
    $data = file_get_contents($url);
    $prices = json_decode($data);
    
    $l = count($prices);
    $h = 0;
    
    for ($i = 0; $i < $l; $i++) {
        $item = (array) $prices[$i];
        if ($item["price"] > $h) $h = $item["price"];
    }
    
    return round($h);
}

function get_price_per_m3($price, $vol) {
    return round($price / 100 / $vol);
}

$m3_per_sec_hulk_common = 50.6; // hulk
$m3_per_sec_hulk_merc = 32.2; // hulk
$m3_per_sec_covetor_common = 40.2; // covetor
$m3_per_sec_fleet_common = (25.3 + 25.3 + 24.5 + 20.1 + 20.1 + 20.1 + 20.1) * 2;

$mer_vol = 40;
$gne_vol = 5;
$spo_vol = 16;
$ark_vol = 16;
$cro_vol = 16;

$mer = get_price(28413);
$gne = get_price(28397);
$spo = get_price(28420);
$ark = get_price(28367);
$cro = get_price(28391);

$mer_m3 = get_price_per_m3($mer, $mer_vol);
$gne_m3 = get_price_per_m3($gne, $gne_vol);
$spo_m3 = get_price_per_m3($spo, $spo_vol);
$ark_m3 = get_price_per_m3($ark, $ark_vol);
$cro_m3 = get_price_per_m3($cro, $cro_vol);

$ore = array
(
    array(
        "name" => "Mercoxit",
        "price_for_block" => $mer,
        "price_for_m3" => $mer_m3
    ),
    array(
        "name" => "Gneiss",
        "price_for_block" => $gne,
        "price_for_m3" => $gne_m3
    ),
    array(
        "name" => "Spodumain",
        "price_for_block" => $spo,
        "price_for_m3" => $spo_m3
    ),
    array(
        "name" => "Arkonor",
        "price_for_block" => $ark,
        "price_for_m3" => $ark_m3
    ),
    array(
        "name" => "Crokite",
        "price_for_block" => $cro,
        "price_for_m3" => $cro_m3
    ),
);

$ore_length = count($ore);
?>
<table>
    <?php for ($i=0; $i < $ore_length; $i++): ?>
    <tr>
        <td class="name">Compressed <?=$ore[$i]["name"]?>:</td>
        <td class="price"><?=number_format($ore[$i]["price_for_block"])?></td>
        <td class="isk-m3"><?=$ore[$i]["price_for_m3"]?> <span class="info">isk/m3</span></td>
    </tr>
    <?php endfor; ?>
</table>
    <?php for ($i=0; $i < $ore_length; $i++):

        $hsm = number_format(round($m3_per_sec_hulk_merc * $ore[$i]["price_for_m3"]));
        $hhm = number_format(round($m3_per_sec_hulk_merc * $ore[$i]["price_for_m3"]) * 3600);
        $hs = number_format(round($m3_per_sec_hulk_common * $ore[$i]["price_for_m3"]));
        $hh = number_format(round($m3_per_sec_hulk_common * $ore[$i]["price_for_m3"]) * 3600);
        $cs = number_format(round($m3_per_sec_covetor_common * $ore[$i]["price_for_m3"]));
        $ch = number_format(round($m3_per_sec_covetor_common * $ore[$i]["price_for_m3"]) * 3600);
        $fs = number_format(round($m3_per_sec_fleet_common * $ore[$i]["price_for_m3"]));
        $fh = number_format(round($m3_per_sec_fleet_common * $ore[$i]["price_for_m3"]) * 3600);
    
        if ($i === 0): ?>
            <p>Hulk: m3/s (Mercoxit): <span class="volume"><?=$m3_per_sec_hulk_merc?></span></p>
            <p>Hulk: m3/s (Common ore): <span class="volume"><?=$m3_per_sec_hulk_common?></span></p>
            <p>Covetor: m3/s: <span class="volume"><?=$m3_per_sec_covetor_common?></span></p>
            <p>Fleet: m3/s: <span class="volume"><?=$m3_per_sec_fleet_common?></span></p>
        <?php endif;
    ?>
<table>
    <caption><?=$ore[$i]["name"]?></caption>
    <tr><th></th><th>isk/sec</th><th>isk/hour</th></tr>

    <?php if ($i === 0): ?>
        <tr><th>Hulk:</th><td><?=$hsm?></td><td class="result"><?=$hhm?></td></tr>
    <?php else: ?>
        <tr><th>Hulk:</th><td><?=$hs?></td><td><?=$hh?></td></tr>
    <?php endif; ?>

    <?php if ($i > 0): ?>
        <tr><th>Covetor:</th><td><?=$cs?></td><td><?=$ch?></td></tr>
        <tr><th>Fleet:</th><td><?=$fs?></td><td class="result"><?=$fh?></td></tr>
    <?php endif; ?>
</table>
    <?php if ($i === 0): ?>
    </div><div>
    <?php endif; ?>
    <?php endfor; ?>
</div>
</body>
</html>
