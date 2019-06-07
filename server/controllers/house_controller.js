module.exports={
    add: (req,res) =>{
        const db = req.app.get('db'),
         {name, address, city, state, zip_code, image_url, mortgage, rent} = req.body
        db.addHouse([name, address, city, state, zip_code, image_url, mortgage, rent])
            .then(response => {
                console.log(response)
                res.status(200).send(response)
            })
            .catch(error =>{
                res.status(500).send({errorMessage:`Controller ADD ${error}`})
            })
    },
    getAll: (req,res) => {
        const db = req.app.get('db')
        db.getHouses()
            .then(response => {
                console.log(response)
                res.status(200).send(response)
            })
            .catch(error => {
                res.status(500).send({errorMessage: "Don't Panic!"})
                console.log(error)
            });
    },
    update :(req,res) => {
        const db = req.app.get('db'),
        { name, address, city, state, zip_code, image_url, mortgage, rent } = req.body,
        { id } = req.params
     
     db.updateHouse( id, name, address, city, state, zip_code, image_url, mortgage, rent )
        .then(response => res.status(200).json(response))
        .catch(error => res.status(500).send(`Controller UPDATE: ${error}`))
     },
     del: (req,res) => {
        const db = req.app.get('db'),
         {id} = req.params
        db.deleteHouse(id)
            .then(() => res.sendStatus(200))
            .catch(error => {
                res.status(500).send(`Controller DELETE ${error}`)
                console.log(error)
            });
    }
}