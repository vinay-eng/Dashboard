const express = require('express')
const router = express.Router()

const {getAllData}  =require('../controller/allData/allData')

const {getAllTopicIntensity, getSingleTopicIntensity } = require('../controller/intensity/topics')
const {getAllSectorsIntensity, getSingleSectorIntensity} = require('../controller/intensity/sectors')
const {getAllRegionIntensity, getSingleRegionIntensity} = require('../controller/intensity/region')
const {getAllPestelcIntensity, getSinglePestelIntensity } = require('../controller/intensity/pestel')

const {getAllTopicLiklehood, getSingleTopicLiklehood} = require('../controller/liklehood/topics')
const {getAllSectorsLiklehood, getSingleSectorLiklehood} = require('../controller/liklehood/sectors')
const {getAllRegionLiklehood, getSingleRegionLiklehood} = require('../controller/liklehood/region')
const {getAllPestelLiklehood, getSinglePestelLiklehood} = require('../controller/liklehood/pestel')

const {getAllTopicRelevance, getSingleTopicRelevance} = require('../controller/relevance/topics')
const {getAllSectorsRelevance, getSingleSectorRelevance} = require('../controller/relevance/sectors')
const {getAllRegionRelevance, getSingleRegionRelevance} = require('../controller/relevance/region')
const {getAllPestelRelevance, getSinglePestelcRelevance} = require('../controller/relevance/pestel')

const {getAll_topic_int_rel_lik, getSingle_topic_int_lik_rel} = require('../controller/finalSendData/topic_int_rel_lik')
const {getAll_sector_int_rel_lik, getSingle_sector_int_lik_rel} = require('../controller/finalSendData/sector_int_rel_lik')
const {getAll_region_int_rel_lik, getSingle_region_int_lik_rel} = require('../controller/finalSendData/region_int_rel_lik')
const {getAll_pestle_int_rel_lik, getSingle_pestle_int_lik_rel} = require('../controller/finalSendData/pestle_int_rel_lik')

const {top10Topic,top10Sector} = require('../controller/top10/top10Topic')

// route fro :--------------sendNode
router
    .route('/sendNode')
    .get(top10Topic)


// routes for : ------------send All data
router
    .route('/send_all_data/topic')
    .get(getAll_topic_int_rel_lik)
router
    .route('/send_all_data/topic/:id')
    .get(getSingle_topic_int_lik_rel)

// routes for : ------------send All data
router
    .route('/send_all_data/sector')
    .get(getAll_sector_int_rel_lik)
router
    .route('/send_all_data/sector/:id')
    .get(getSingle_sector_int_lik_rel)

// routes for : ------------send All data
router
    .route('/send_all_data/region')
    .get(getAll_region_int_rel_lik)
router
    .route('/send_all_data/region/:id')
    .get(getSingle_region_int_lik_rel)

// routes for : ------------send All data
router
    .route('/send_all_data/pestle')
    .get(getAll_pestle_int_rel_lik)
router
    .route('/send_all_data/pestle/:id')
    .get(getSingle_pestle_int_lik_rel)




// routes for :---------AllData for tabl
router
    .route('/getAllData')
    .get(getAllData)

// routes for :----------pestel/relevance
router
    .route('/relevence/pestle')
    .get(getAllPestelRelevance)
router
    .route('/relevence/pestle/:id')
    .get(getSinglePestelcRelevance)

// routes for :----------pestel/intensity
router
    .route('/intensity/pestle')
    .get(getAllPestelcIntensity)
router
    .route('/intensity/pestle/:id')
    .get(getSinglePestelIntensity)

// routes for :-----------pestel/liklehood
router
    .route('/liklehood/pestle')
    .get(getAllPestelLiklehood)
router
    .route('/liklehood/pestle/:id')
    .get(getSinglePestelLiklehood)

// routes for :------Topic/Intensity
router
    .route('/intensity/topic/')
    .get(getAllTopicIntensity)
router
    .route('/intensity/topic/:id')
    .get(getSingleTopicIntensity)

// routes for :------Sector/Intensity
router
    .route('/intensity/sector')
    .get(getAllSectorsIntensity)
router
    .route('/intensity/sector/:id')
    .get(getSingleSectorIntensity)

// routes for :------Region/Intensity
router
    .route('/intensity/region')
    .get(getAllRegionIntensity)
router
    .route('/intensity/region/:id')
    .get(getSingleRegionIntensity)

    // routes for :------topic/liklehood
router
    .route('/liklehood/topic')
    .get(getAllTopicLiklehood)
router
    .route('/liklehood/topic/:id')
    .get(getSingleTopicLiklehood)

   // routes for :------sector/liklehood
router
    .route('/liklehood/sector')
    .get(getAllSectorsLiklehood)
router
    .route('/liklehood/sector/:id')
    .get(getSingleSectorLiklehood)

   // routes for :------region/liklehood
router
    .route('/liklehood/region')
    .get(getAllRegionLiklehood)
router
    .route('/liklehood/region/:id')
    .get(getSingleRegionLiklehood)

   // routes for :------topic/relevence
router
    .route('/relevence/topic')
    .get(getAllTopicRelevance)
router
    .route('/relevence/topics/:id')
    .get(getSingleTopicRelevance)

   // routes for :------sector/relevence
router
    .route('/relevence/sector')
    .get(getAllSectorsRelevance)
router
    .route('/relevence/sector/:id')
    .get(getSingleSectorRelevance)

   // routes for :------region/relevence
router
    .route('/relevence/region')
    .get(getAllRegionRelevance)
    router
    .route('/relevence/region/:id')
    .get(getSingleRegionRelevance)
    
module.exports = router