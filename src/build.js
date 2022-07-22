const fs = require("fs");
const path = require("path");

function walk(dir) {
    return new Promise((resolve, _) => {
        fs.readdir(dir, (_, files) => {
            Promise.all(files.map((file) => {
                return new Promise((resolve, _) => {
                    const filepath = path.join(dir, file);
                    fs.stat(filepath, (_, stats) => {
                        if (stats.isDirectory()) {
                            walk(filepath).then(resolve);
                        } else if (stats.isFile()) {
                            resolve(filepath);
                        }
                    });
                });
            }))
                .then((foldersContents) => {
                    resolve(foldersContents.reduce((all, folderContents) => all.concat(folderContents), []));
                });
        });
    });
}

async function build(dir) {
    const tags = {}
    const months = {}
    const titles = {}

    fs.mkdirSync(path.resolve(__dirname, '..', 'build', dir), { recursive: true })
    const paths = await walk(path.resolve(__dirname, dir))
    for (const p of paths) {
        if (!p.endsWith('.json') && !p.endsWith('.md') && !p.endsWith(".jpg")) continue
        const data = fs.readFileSync(p)
        fs.writeFileSync(path.resolve(__dirname, '..', 'build', dir, path.parse(p).base), data, { flag: 'w+' })
        if (p.endsWith('.md') || p.endsWith('.jpg')) continue
        const json = JSON.parse(data)
        const linkPath = path.join(dir, path.parse(p).base.replace('.json', '')).split(path.sep).join(path.posix.sep)
        console.log(linkPath)
        titles[json.title] = linkPath

        for (const tag of json.tags) {
            if (tag in tags) {
                tags[tag].push(linkPath)
            } else {
                tags[tag] = [linkPath]
            }
        }
        let month = 1
        if (json.timestamp)
            month = (new Date(json.timestamp * 1000)).toISOString().substring(0, 7)
        const m = { path: linkPath, title: json.title }
        if (month in months) {
            months[month].push(m)
        } else {
            months[month] = [m]
        }
    }
    fs.writeFileSync(path.resolve(__dirname, '..', 'build', dir, '__tags.json'), JSON.stringify(tags))
    fs.writeFileSync(path.resolve(__dirname, '..', 'build', dir, '__months.json'), JSON.stringify(months))
    fs.writeFileSync(path.resolve(__dirname, '..', 'build', dir, '__titles.json'), JSON.stringify(titles))
}

fs.rmdirSync(path.resolve(__dirname, '..', 'build'), { recursive: true, force: true })
build('notes')
build('projects')
