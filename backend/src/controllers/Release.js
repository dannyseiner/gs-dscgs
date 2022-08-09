import db from "./database"

export const getReleases = (req, res) => {
    db.query("SELECT * FROM releases_home ORDER BY price ASC LIMIT 10", (response) => {
        res.type('text');
        res.status(200);
        res.json(response);
    })
};
