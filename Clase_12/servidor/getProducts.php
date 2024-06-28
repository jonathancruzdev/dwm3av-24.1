<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json; charset=utf-8');
$products =  array(
    "products" => [
        [
            "id" => 101, "title" => "AirPods Max Silver Modificado", "description" => "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.", "price" => 549.99, "thumbnail" => "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png"
        ],
        [
            "id" => 104,
            "title" => "Apple iPhone Charger",
            "description" => "The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.",
            "price" => 19.99,
            "thumbnail" => "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/thumbnail.png"
        ],
        [
            "id" => 105,
            "title" => "Apple MagSafe Battery Pack",
            "description" => "The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.",
            "price" => 99.99,
            "thumbnail" => "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/thumbnail.png"
        ],
        [
            "id" => 107,
            "title" => "Beats Flex Wireless Earphones",
            "description" => "The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.",
            "price" => 49.99,
        ],
        "thumbnail" => "https://cdn.dummyjson.com/products/images/mobile-accessories/Beats%20Flex%20Wireless%20Earphones/thumbnail.png"
    ]);

    echo (json_encode( $products ) )
?>