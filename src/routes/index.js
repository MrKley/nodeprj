const { Router } = require('express');
const express = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'First WebSite' });
});

router.get('/about', (req, res) => {
    res.render('index', { title: 'First WebSite' });
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact Pages' });
});

module.exports = router;