import db from "./database"


export const getReleases = (req, res) => { // return releases with pagination enabled
    const response_object = { releases: [], pagination: {} }
    db.query(`SELECT * FROM releases_home  ORDER BY price_usd DESC LIMIT ${req.params.page * 10},10`, (response, err) => {
        db.query(`SELECT count(price) as pages  FROM releases_home`, (response_length, response_err) => {
            if (err) throw err;
            if (response_err) throw response_err
            response_object.releases = response
            response_object.pagination = {
                max_pages: response_length[0].pages / 10
            }
            res.send(response_object);
        })
    })
};

export const getReleaseById = (req, res) => {
    db.query(`SELECT * FROM releases_home WHERE release_id = ${req.params.id}`, (response, err) => {
        if (err) throw err;
        res.send(response)
    })
}

export const getReleaseByTitle = (req, res) => {
    db.query(`SELECT * FROM releases_home WHERE title like '%${req.params.title}%'`, (response, err) => {
        if (err) throw err;
        res.send(response)
    })
}