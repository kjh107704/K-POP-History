export class AdminController
{
    static getCharts = (req, res) => {
        res.send('music charts');
    };

    static addMusic = (req, res) => {
        console.log(req.body);
        res.json(req.body);
    };
}