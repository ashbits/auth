var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/users/whoami', function (req, res, next) {
  res.status(200).send({
    "token": "5d548ba209cb4b6a26e1a0be2a7826e3cab1eeda",
    "user_id": "consumer2",
    "username": "consumer2",
    "group": {
      "id": 3,
      "name": "consumer"
    },
    "privileges": [],
    "company": "a76ea48a-dcf8-4481-94fd-aff85317fbd2",
    "sip": {
      "extension": "consumerV2",
      "password": "Nexsales102030",
      "public_identity": "sip:consumerV2@23.253.248.226",
      "realm": "23.253.248.226",
      "websocket_proxy": "wss:\/\/v2.voicereach365.com\/wssip"
    }
  })
});
router.post('/users/login', function (req, res, next) {
  res.status(200).send({
    "token": "03d86a4b04575619cfa04042115099810aed8be2",
    "user": {
      "id": "consumer2",
      "username": "consumer2"
    },
    "group": {
      "id": 3,
      "name": "consumer"
    }
  })
});
router.get('/entities/menu/', function (req, res, next) {
  res.status(200).send([{
    "id": "1",
    "name": "Dashboard",
    "url": "dash-report",
    "icon": "fa-dashboard"
  }, {
    "id": "2",
    "name": "Sessions",
    "url": "session",
    "icon": "fa-flash"
  }, {
    "id": "3",
    "name": "Campaigns",
    "url": "campaign",
    "icon": "fa-calendar"
  }, {
    "id": "5",
    "name": "List",
    "url": "contactList",
    "icon": "fa-list"
  }, {
    "id": "7",
    "name": "Change Password",
    "url": "profile-change-password",
    "icon": "fa-unlock-alt"
  }, {
    "id": "14",
    "name": "Report",
    "url": "report",
    "icon": "fa-bar-chart-o"
  }, {
    "id": "19",
    "name": "Jobs",
    "url": "job",
    "icon": "fa-cloud"
  }, {
    "id": "20",
    "name": "Interactions",
    "url": "interaction",
    "icon": "fa-cloud"
  }, {
    "id": "24",
    "name": "Settings",
    "url": "consumer\/settings",
    "icon": "fa-cog"
  }]);
})

module.exports = router;