# Verifica se ha mudancas nao publicadas no repositorio.
# Se houver, imprime um lembrete (systemMessage) para o usuario.
# Se estiver tudo publicado, nao imprime nada.

Set-Location -LiteralPath (Split-Path $PSScriptRoot -Parent)

$status = git status --porcelain 2>$null
$ahead  = git rev-list --count '@{u}..HEAD' 2>$null

$partes = @()
if ($status) {
    $partes += "ha mudancas salvas no PC que ainda NAO foram publicadas (falta commit)"
}
if ($ahead -and ([int]$ahead) -gt 0) {
    $partes += "$ahead commit(s) que ainda NAO foram enviados (falta push)"
}

if ($partes.Count -gt 0) {
    $texto = "LEMBRETE: " + ($partes -join " e ") + ". De um duplo-clique em 'Publicar site' para colocar no ar (jstechcorp.com)."
    @{ systemMessage = $texto } | ConvertTo-Json -Compress
}
