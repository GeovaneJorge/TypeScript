echo "# TypeScript" >> README.md
git init
git add README.md
git commit -m "first commit"


git pull 
git add .\funcoes.ts
git commit -m "Funcoes" 
git branch -M main
git remote add origin https://github.com/GeovaneJorge/TypeScript/blob/main/git.ts
git push -u origin main

