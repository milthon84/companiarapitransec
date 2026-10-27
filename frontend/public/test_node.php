<?php
header('Content-Type: text/plain');

echo "=== FUNCIONES DESHABILITADAS ===\n";
echo "disable_functions: " . ini_get('disable_functions') . "\n\n";

echo "=== PATH EN PHP ===\n";
echo "PATH: " . getenv('PATH') . "\n\n";

echo "=== PROBANDO IS_EXECUTABLE DIRECTO EN DISCO ===\n";
$paths = [
    '/usr/bin/node',
    '/usr/local/bin/node',
    '/opt/cpanel/ea-nodejs22/bin/node',
    '/opt/cpanel/ea-nodejs20/bin/node',
    '/opt/cpanel/ea-nodejs18/bin/node',
    '/opt/cpanel/ea-nodejs16/bin/node',
    '/opt/cpanel/ea-nodejs14/bin/node',
    '/opt/cpanel/ea-nodejs12/bin/node',
    '/opt/cpanel/ea-nodejs10/bin/node',
    '/opt/alt/alt-nodejs20/root/usr/bin/node',
    '/opt/alt/alt-nodejs18/root/usr/bin/node',
    '/opt/alt/alt-nodejs16/root/usr/bin/node',
    '/home/compania/.nvm/versions/node',
];

foreach ($paths as $p) {
    if (file_exists($p)) {
        echo "ENCONTRADO: $p (ejecutable: " . (is_executable($p) ? 'SI' : 'NO') . ")\n";
    } else {
        echo "NO EXISTE: $p\n";
    }
}

echo "\n=== ESCANEANDO /opt/cpanel/ ===\n";
if (is_dir('/opt/cpanel')) {
    $scan = @scandir('/opt/cpanel');
    print_r($scan);
} else {
    echo "/opt/cpanel no es accesible o no existe.\n";
}

echo "\n=== ESCANEANDO /usr/local/bin/ ===\n";
if (is_dir('/usr/local/bin')) {
    $scan = @scandir('/usr/local/bin');
    print_r($scan);
} else {
    echo "/usr/local/bin no accesible.\n";
}
