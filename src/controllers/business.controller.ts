import Business from "../daos/business.dao.js";

const business = new Business();

class BusinessControllers {
    async getBusiness(req, res) {
        const result = await business.getBusiness();
        if(!result) res.status(500).send({status: 'error', error: 'Something went wrong'});
        res.send({status: 'success', result });
    };
    
    async getBusinessById(req, res) {
        const result = await business.getBusinessById(req.params.id);
        if(!result) res.status(404).send({status: 'error', error: 'Business not found'});
        res.send({status: 'success', result });
    };
    
    async createBusiness(req, res) {
        const result = await business.saveBusiness(req.body);
        if(!result) res.status(500).send({status: 'error', error: 'Something went wrong'});
        res.send({status: 'success', result });
    };
    
    async addProduct(req, res) {
        const business = await business.getBusinessById(req.params.id);
        if(!business) res.status(404).send({status: 'error', error: 'Business not found'});
        business.products.push(req.body);
        const result = await business.updateBusiness(req.params.id, business);
        if(!result) res.status(500).send({status: 'error', error: 'Something went wrong'});
        res.send({status: 'success', result });
    };
}