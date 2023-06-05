const express = require("express")
const { ProjectModel } = require("../model/project.model")

const projectRoute = express.Router()



projectRoute.get("/allproject", async (req, res) => {
    //let data=req.body
    const { query } = req.query
    try {
        const page = parseInt(req.query.page) || 1;

        const limit = parseInt(req.query.limit) || 10;

        const skip = (page - 1) * limit;

        if (query) {

            let querydatafind = await ProjectModel.find().sort({ [query]: 1 }).skip(skip).limit(limit);
            res.json(querydatafind)

        } else {
            const projectsData = await ProjectModel.find()
                .skip(skip)
                .limit(limit);

            res.json(projectsData);
        }
    } catch (error) {
        res.status(500).json({ error });
    }
})


// GET all prject data BY therir ID

projectRoute.get("/project/:ID", async (req, res) => {
    const ID = req.params.ID

    try {
        const data = await ProjectModel.findOne({ _id: ID })
        res.send(data)

    } catch (err) {
        console.log(err)
        console.log({ "error": "Error is coming While Get data" })

    }
})

//Posting Data

projectRoute.post("/create", async (req, res) => {
    let data = req.body
    try {
        let newData = new ProjectModel(data)
        await newData.save()
        //res.send(newData)
        console.log(data)
        res.send({ "status": "True", "Message": "New project added successfully" })



    } catch (err) {
        console.log(err)
        console.log({ "Error": "Something Went Wrong while Posting" })

    }
})


// patch request

// //PUT and Patch Request

projectRoute.patch("/edit/:id", async (req, res) => {
    const ID = req.params.id;
    const payload = req.body;

    try {
        let patchdata = await ProjectModel.findByIdAndUpdate({ _id: ID }, payload);
        res.send(`The document with id:${ID} has been updated`);
        console.log(patchdata)
    } catch (err) {
        console.log(err);
        console.log({ Error: "Error coming While Put Request" });
        res.status(404).send(err.message);
    }
});


//            new section  /////////////

// total project count
projectRoute.get('/projecttotal', async (req, res) => {
    try {
        const totalProjectCount = await ProjectModel.countDocuments();
        res.json(totalProjectCount);
    } catch (error) {
        res.status(500).json({ error });
    }
});

//cancelled
projectRoute.get('/projectcanceled', async (req, res) => {
    try {
        const canceledProjectCount = await ProjectModel.countDocuments({ status: 'Cancelled' });
        res.json(canceledProjectCount);
    } catch (error) {
        res.status(500).json({ error });
    }
});


//RUNNING
projectRoute.get('/projectrunning', async (req, res) => {
    try {
        const runningCount = await ProjectModel.countDocuments({ status: 'Running' });
        res.json(runningCount);
    } catch (error) {
        res.status(500).json({ error });
    }
});

//closed
projectRoute.get('/closedproject', async (req, res) => {
    try {
        const closedCount = await ProjectModel.countDocuments({ status: 'Closed' });
        res.json(closedCount);
    } catch (error) {
        res.status(500).json({ error });
    }
});





// change status running 

projectRoute.patch('/runstatus/:id', async (req, res) => {
    try {
        const updatedData = await ProjectModel.findByIdAndUpdate(req.params.id, { status: 'Running' }, { new: true });
        res.json(updatedData || { error: 'Project not found' });
    } catch (error) {
        res.status(500).json({ error });
    }
});


// change status close 
projectRoute.patch('/closestatus/:id', async (req, res) => {
    try {
        const updatedData = await ProjectModel.findByIdAndUpdate(req.params.id, { status: 'Closed' }, { new: true });
        res.json(updatedData || { error: 'Project not found' });
    } catch (error) {
        res.status(500).json({ error });
    }
});

// change status cancel 
projectRoute.patch('/cancelstatus/:id', async (req, res) => {
    try {
        const updatedData = await ProjectModel.findByIdAndUpdate(req.params.id, { status: 'Cancelled' }, { new: true });
        res.json(updatedData || { error: 'Project not found' });
    } catch (error) {
        res.status(500).json({ error });
    }
});




module.exports = {
    projectRoute
}

