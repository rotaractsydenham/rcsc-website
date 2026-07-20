@('New York','Slate','y') | ForEach-Object { Write-Output $_ } | & npx.cmd shadcn@latest init --yes
