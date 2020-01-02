const express = require('express');
const router = express.Router();

router.use('/contentful', (req, res, next) => {

    console.log("***************** setup of contentful client **********");

    const url = require('url');
    const contentful = require('contentful');   
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_PREVIEW_MODE === 'true' ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN;
    const host = process.env.CONTENTFUL_PREVIEW_MODE === 'true' ? 'preview.contentful.com' : 'cdn.contentful.com';

    req.client = contentful.createClient({
        space: spaceId,
        accessToken: accessToken,
        host: host,
        resolveLinks: false
    });

    req.queryObj = {};

    const queryString = url.parse(req.url).query;

    if (queryString !== null) {
        queryString.split('&').forEach((e) => {
            let item = e.split('=');
            req.queryObj[item[0]] = item[1];
        });
    }

    next();
});

router.get('/contentful', (req, res) => {
    console.log(req.queryObj);

    req.client.getEntries(req.queryObj)
    .then((response) => {
        return res.send(response);
    })
    .catch((error) => {
        console.error("error: "+ error.message);
        return res.status(500).send(error.message);
    });
});

module.exports = router;