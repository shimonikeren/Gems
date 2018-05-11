//big if 
if (gem) {



if (req.user) {
        if (req.user.id == gem.UserId) {
            let author = req.user;
            author.owner = true;
            console.log(author)
            console.log(gem.UserId)
            console.log(req.user.id)
            res.render("show", {
                gem: gem,
                user: author
            })
            console.log(gem.User)
        } else if (gem) {

            res.render("show", {
                user: req.user,
                gem: gem,
            })
        } 
    } 
    
    //else not user but yes gem because in big if 
    else {
        res.render("show", {
            user: req.user,
            gem: gem,
        })
    }




} //close big if then do else 
else {
    res.status(404).send({});
}