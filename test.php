<?php

set_time_limit(1800);

// $url = 'https://esi.evetech.net/latest/markets/10000002/orders/?datasource=tranquility&order_type=buy&page=500';
// $data = file_get_contents($url);
// var_dump($data);
// $prices = json_decode($data);

// $l = count($prices);

// for ($i = 0; $i < $l; $i++) {

//     $item = (array) $prices[$i];

//     echo '<p>' . $i . ' ' . $item["price"] . '</p>';

// }

$page = 1;

do {
    $url = 'https://esi.evetech.net/latest/markets/10000002/orders/?datasource=tranquility&order_type=buy&page=' . $page;
    $data = file_get_contents($url);
    $prices = json_decode($data);
    $length = count($prices);
    if ($length) echo '<p>Page ' . $page . ' exists with ' . $length . ' strings.</p>';
    $page += 10;
} while ($length === 1000);

?>