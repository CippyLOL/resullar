module.exports = function(app){


    //Handling GET request to show all the education entries
    app.get("/edentriesbyuser", function (req, res) {
        let sqlquery = "SELECT * FROM education";
        db.query(sqlquery, (err, result) => {
            if (err) {
                res.redirect("/");
            }
            res.render(" ", {  });
        });
    });


    //Handling POST request to add education entry to database (education table)
    app.post("/addeducationentry", function (req, res) {
        let sqlquery = "INSERT INTO education(schoolname, location, certification, major, startyear, endyear) VALUES (?,?,?,?,?,?,?,?)";
        let newrecord = [req.body.schoolname, req.body.location, req.body.certification, req.body.major, req.body.startyear, req.body.endyear];
        db.query(sqlquery, newrecord, (err, result) => {
            if (err) {
                return console.error(err.message);
            } else
                res.send(" This education entry has been added to database, name: " + req.body.schoolname);
        });
    });

    //Handling GET request to show all the work entries
    app.get("/workentriesbyuser", function (req, res) {
            let sqlquery = "SELECT * FROM work";
            db.query(sqlquery, (err, result) => {
                if (err) {
                    res.redirect("/");
                }
                res.render(" ", {  });
            });
        });
    
    
    //Handling POST request to add work entry to database (work table)
    app.post("/addworkentry", function (req, res) {
            let sqlquery = "INSERT INTO work(companyname, location, startyear, endyear, responsibilities) VALUES (?,?,?,?,?)";
            let newrecord = [req.body.companyname, req.body.location, req.body.startyear, req.body.endyear, req.body.responsibilities];
            db.query(sqlquery, newrecord, (err, result) => {
                if (err) {
                    return console.error(err.message);
                } else
                    res.send(" This work entry has been added to database, name: " + req.body.companyname);
            });
        });


    //Handling GET request to show all the projects entries
    app.get("/projectsentriesbyuser", function (req, res) {
            let sqlquery = "SELECT * FROM projects";
            db.query(sqlquery, (err, result) => {
                if (err) {
                    res.redirect("/");
                }
                res.render(" ", {  });
            });
        });
    
    
    //Handling POST request to add projects entry to database (projects table)
    app.post("/addprojectsentry", function (req, res) {
            let sqlquery = "INSERT INTO projects(projectname, projectstart, projectend, description) VALUES (?,?,?,?)";
            let newrecord = [req.body.projectname, req.body.projectstart, req.body.projectend, req.body.description];
            db.query(sqlquery, newrecord, (err, result) => {
                if (err) {
                    return console.error(err.message);
                } else
                    res.send(" This projects entry has been added to database, name: " + req.body.projectname);
            });
        });

}