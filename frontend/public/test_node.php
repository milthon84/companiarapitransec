<?php
header('Content-Type: text/plain');

echo "=== SISTEMA ===\n";
echo php_uname() . "\n";
echo "Usuario actual: " . get_current_user() . "\n\n";

echo "=== BUSCANDO NODE.JS ===\n";
$commands = [
    'which node 2>&1',
    'whereis node 2>&1',
    'find /opt/cpanel -name node 2>/dev/null',
    'find /usr/local/bin -name node 2>/dev/null',
    'ls -la /opt/cpanel/ 2>&1',
    'ls -la /usr/local/bin/ 2>&1',
    'ls -la /usr/bin/node* 2>&1',
    'find /opt/alt -name node 2>/dev/null',
];

foreach ($commands as $cmd) {
    echo "--- Comando: $cmd ---\n";
    echo shell_exec($cmd) . "\n";
}
