const express = require('express');
const router = express.Router();

const { addOrder,
    updateOrder,
    deleteOrder,
    readAllOrder,
    readOrderById,
    readAllSpecificChem,
    addSpecificChem,
    updateSpecificChem,
    readAllSpecificChemById,
    DeleteSpecificChemById,
    readRecheckOrder,
    readRealTimeOrder,
    readTestReportlasted,
    readAllSpecificBioById,
    Addtestreport,
    readAllSpecificMicro,
    readIdChem,
    readIdMicro,
    urgentOrders,
    readOrdertoCheck,
    reSend
} = require('../controller/ProductConotroller');
const { requireSignin } = require('../controller/authController')
router.post('/addOrder', requireSignin,addOrder);
router.post('/updateOrder', requireSignin,updateOrder);
router.post('/deleteOrder', requireSignin,deleteOrder);
router.post('/reSend', requireSignin,reSend);
// router.post('/updateOrder', requireSignin,updateOrder);
router.post('/readAllOrder', requireSignin,readAllOrder);
router.post('/readOrdertoCheck', requireSignin,readOrdertoCheck);
router.post('/urgentOrders', requireSignin,urgentOrders);

router.post('/readOrderById', requireSignin,readOrderById);
router.post('/readAllSpecificChem', requireSignin,readAllSpecificChem);
router.post('/readAllSpecificMicro', requireSignin,readAllSpecificMicro);
router.post('/addSpecificChem', requireSignin,addSpecificChem);
router.post('/updateSpecificChem', requireSignin,updateSpecificChem);
router.post('/readAllSpecificChemById', requireSignin,readAllSpecificChemById);
router.post('/DeleteSpecificChemById', requireSignin,DeleteSpecificChemById);
router.post('/readRecheckOrder', requireSignin,readRecheckOrder);
router.post('/readRealTimeOrder', requireSignin,readRealTimeOrder);
router.post('/readTestReportlasted', requireSignin,readTestReportlasted);
router.post('/readAllSpecificBioById', requireSignin,readAllSpecificBioById);

//Addtestreport
router.post('/Addtestreport', requireSignin,Addtestreport);

//Checkbox Specific
router.post('/readIdChemCheckbox', requireSignin,readIdChem);
router.post('/readIdMicroCheckbox', requireSignin,readIdMicro);

module.exports = router;