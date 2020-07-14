import rp from'request-promise';
import cheerio from 'cheerio';
import {voca} from 'voca';

export class AdminController
{
    static getCharts = (req, res) => {
        res.send('music charts');
    };
    static addMusic = (req, res) => {
        console.log(req.body);
        res.json(req.body);
    };

    static getMelonCharts = (req, res) => {
        const options = {
            url : "https://www.melon.com/chart/week/index.htm",
            qs : {
                startDay : 20200406,
                BendDay : 20200412
            }
        }
        rp.get(options).then( html => {
            const $ = cheerio.load(html);

            let title = [];
            let album = [];
            let singer = [];

            $('.ellipsis.rank01 > span > a').each(function() {
                title.push($(this).text());
            })
            $('.ellipsis.rank02 > span').each(function() {
                singer.push($(this).text());
            })
            $('.ellipsis.rank03 > a').each(function() {
                album.push($(this).text());
            })

            for(let i = 0; i < title.length; i++)
            {
                console.log((i+1)+'위 | '+title[i]+' | '+singer[i]+' | '+ album[i]);
            }
        })
    }
}