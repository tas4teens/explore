var timeSearched = 0;
var zz =0;
var devOrientation = '';
var clone;
//decide whether navigation bar will show right or left arrow; make mobile compatible
function decideLorR(x){
    if(x.matches){
        devOrientation = 'portrait';
    }else{
        devOrientation = 'landscape';
    }
}

var x = window.matchMedia("(orientation: portrait)");
decideLorR(x);

if(devOrientation === 'portrait'){
    document.getElementsByClassName('linkHolder')[2].style.marginBottom = '13%';
    document.getElementsByClassName('textHolder')[5].style.marginBottom = '13%';
    document.getElementsByClassName('referenceText')[3].style.marginBottom = '13%';
}

/*aaaaaaaaaaaaaaaaaaaaauuuuuuuuuuuuuuuuuuuuuuutttttttttttttttthhhhhhhhhhhhhhhhoooooooooooooooooorrrrrrrrrrrrrrwwwwwwwwwwwwwwwwaaaaaaaaaaaaaaaaaaaasssssssssssssssssssshhhhhhhhhhhhhhhhheeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrreeeeeeeeeeeeee*/

var entireWebsite = [

    ////////////////////
    //ALCOHOL
    ////////////////////

    {title: 'Alcohol use and its dangers', link: '/substances/alcohol.html', description: 'This page goes into detail about alcohol use and alcohol use disorder (AUD). DSM-5 diagnosis, how alcohol works in the body, treatment methods of AUD, and more are covered.', keywords: ['aud', 'alcohol', 'use', 'disorder', 'treatment', 'liver', 'substance', 'substances', 'adolescent', 'adolescents', 'cancer', 'binge', 'drinking', 'beer', 'wine', 'dependence', 'dsm-5', 'dsm', '5', 'gaba', 'glutamate', 'depressant', 'neurotransmitter', 'neurotransmitters', 'kidney', 'lung', 'adh', 'antiduretic', 'hormone', 'digestive', 'digestion', 'digesting', 'small', 'intestine', 'stomach', 'cost', 'alcoholics', 'anonymous', 'disulfram', 'naltrexone', 'acamprosrate', 'meaning', 'definition', 'addiction', 'define', 'withdrawal', 'help', 'statistics', 'danger', 'dangers']},

    //SUBPAGES of alcohol
    {title: 'What is Alcohol Use Disorder (AUD?)', link: '/substances/alcohol.html/#aud', keywords: ['aud', 'alcohol', 'adolescent', 'dependence', 'meaning', 'definition', 'define', 'what'], description: 'Located under: Alcohol use and its dangers ??? What is AUD?'}, 
    {title: 'DSM-5 diagnosis of AUD', link: '/substances/alcohol.html/#dsm5', keywords: ['aud', 'alcohol', 'use', 'disorder', 'adolescent', 'dsm5', 'dsm', '5', 'dsm-5', 'diagnosis', 'dependence', 'withdrawal', 'craving', 'tolerance'], description: 'Located under: Alcohol use and its dangers ??? DSM-5 diagnosis'},
    {title: 'How alcohol works in your body', link: '/substances/alcohol.html/#effects', keywords: ['aud', 'alcohol', 'adolescent', 'gaba', 'glutamate', 'lung', 'blood', 'blood vessel', 'blood vessels', 'liver', 'neurotransmitter', 'neurotransmitters', 'neuron', 'neurons', 'cardiac', 'arrest', 'arrythmia,', 'adh', 'antiduretic', 'hormone', 'liver', 'cancer', 'dna', 'acetaldehyde', 'digestive', 'digestion', 'digesting', 'digestive','hemorrhoids', 'hemorrhoid', 'malnutrition', 'ulcer', 'stomach', 'small', 'intestine', 'tract', 'dilate', 'dilation', 'side', 'effects', 'long', 'term', 'work', 'works'], description: 'Located under: Alcohol use and its dangers ??? Effects'},
    {title: 'Statistics of alcohol use and AUD', link: '/substances/alcohol.html/#stats', keywords: ['aud', 'alcohol', 'adolescent', 'cost', 'global', 'national', 'nation', 'death', 'number', 'die', 'deaths', 'world', 'worldwide', 'nationwide', 'us', 'united states', 'usa','statistics'], description: 'Located under: Alcohol use and its dangers ??? Statistics'},
    {title: 'Treatment of alcohol use disorder', link: '/substances/alcohol.html/#treatment', keywords: ['aud', 'alcohol', 'adolescent', 'help', 'motivation', 'treatment', 'alcoholics', 'anonymous', 'disulfram', 'naltrexone', 'acamprosrate', 'therapy', 'therapist', 'al', 'anon', 'al-anon'], description: 'Located under: Alcohol use and its dangers ??? Treatment'},

    ///////////////////////////    
    //NITROUS OXIDE
    ///////////////////////////

    {title: 'Nitrous Oxide - a fairly common substance', link: '/substances/nitrousoxide.html', description: 'FULL ARTICLE || Explore what nitrous oxide is, how its inhaled, its side effects, DSM-5 diagnosis, and usage statistics.', keywords: ['nitrous', 'oxide', 'n2o', 'nitric', 'cartilage', 'canister', 'dental', 'substance', 'use', 'adolescent', 'other', 'dsm5', 'dsm', '5', 'dsm-5', 'diagnosis', 'diagnose', 'side', 'effect', 'stats', 'statistics', 'statistic', 'usage', 'balloon', 'party', 'baking', 'disorder', 'whipped', 'cream', 'whippets']},

    //SUBPAGES of nitrous oxide
    {title: 'What is nitrous oxide?', link: '/substances/nitrousoxide.html#introduction', keywords: ['nitrous', 'oxide', 'n2o', 'nitric', 'cartilage', 'canister', 'dental', 'usage', 'balloon', 'party', 'dental', 'legal'], description: 'Located under: Nitrous Oxide - a fairly common substance ??? What is nitrous oxide?'}, 
    {title: 'DSM-5 diagnosis of nitrous oxide use disorder?', link: '/substances/nitrousoxide.html#dsm5diagnosis', keywords: ['nitrous', 'oxide', 'n2o', 'nitric', 'substance', 'use', 'usage', 'dsm5', 'dsm', '5', 'dsm-5', 'diagnosis', 'other', 'sud', 'disorder', 'mild', 'moderate','medium', 'heavy', 'severe'], description: 'Located under: Nitrous Oxide - a fairly common substance ??? DSM-5 Diagnosis'}, 
    {title: 'Nitrous oxide effects', link: '/substances/nitrousoxide.html#effects', keywords: ['nitrous', 'oxide', 'n2o', 'nitric', 'substance', , 'diffusion', 'hypoxia', 'vitamin', 'b12', 'induce', 'deficien', 'pernicious', 'anemia', 'arrythmia', 'heart', 'cardio', 'methionine', 'synthesis', 'synthase', 'myelin', 'sheath', 'nerve', 'neuron', 'phospholipid', 'cyanocobalamin', 'injection', 'red', 'blood', 'cell', 'deficiency', 'effect', 'effects', 'side', 'long','short', 'term'], description: 'Located under: Nitrous Oxide - a fairly common substance ??? Effects || Description: Nitrous oxide has a lot of effects on your body, contributing to a lot of nerve problems. Read more here.'}, 
    {title: 'Nitrouse oxide statistics', link: '/substances/nitrousoxide.html#statistics', keywords: ['nitrous', 'oxide', 'n2o', 'nitric', 'adolescent', 'uk', 'united', 'kingdom', 'stats', 'statistic', 'england', 'global', 'drug', 'survey', '2013', '2019', 'marijuana', 'club', 'rave', 'party', 'prevale', 'high', 'school', 'senior', 'use', 'statistics'], description: 'Located under: Nitrous Oxide - a fairly common substance ??? Statistics'}, 


];
var splitArray = [];
var score;
var scoreArray = [];
var scoreArrayKeywords = [];
var subScore;
var subScoreArray = [];
var arrayPos;

function search(){

    timeSearched++;
    splitArray = [];
    score = 0;
    scoreArray = [];
    scoreArrayKeywords = [];
    subScore = 0;
    subScoreArray = [];
    document.getElementById('searchResultsHolder').style.display = 'none';
    splitArray = document.getElementById('searchBox').value.split(' ');
    for (var i = 0; i < splitArray.length; i++){
        splitArray[i].toLowerCase();
    }

    score = 0;
    for (var i = 0; i < entireWebsite.length; i++){
        score = 0;
        scoreArrayKeywords = [];
        subScore = 0;

        for (var j = 0; j < splitArray.length; j++){
            if(entireWebsite[i].keywords.includes(splitArray[j]) || entireWebsite[i].keywords.includes(splitArray[j].substring(0, splitArray.length - 1)) || entireWebsite[i].keywords.includes(splitArray[j].substring(0, splitArray.length - 2)) || entireWebsite[i].keywords.includes(splitArray[j].substring(0, splitArray.length - 3)) || entireWebsite[i].keywords.includes(splitArray[j].substring(0, splitArray.length - 4))){//root word checker
                score++;
                scoreArrayKeywords.push(splitArray[j]);
            }
        }
        scoreArray.push(score);
        subScoreArray.push(scoreArrayKeywords);
    }
    console.log(scoreArray);
    clone = scoreArray;
    console.log('clone is '+ clone);

    //first rearrangement

    //produce main website code

    var dummy = document.getElementsByClassName('indivArticleHolder');

    while(dummy[0]){
        dummy[0].parentNode.removeChild(dummy[0]);
    }

    //get number of 0s in the array
    var zeroCounter = 0;
    for (var z = 0; z < scoreArray.length; z++){
        if(scoreArray[z]===0){
            zeroCounter++;
        }
    }
    
    document.getElementById('searchResultsHolder').style.display = 'block';
    document.getElementById('explanationRevealed').style.display = 'none';
    var tCounter = -1;
    var max = -1;
    var maxPos = -1;
    var temp;
    var storedNumber;
    
    //let's go! finally a sorting algorithm!!! *ap computer science flashbacks intensify*
    for (var k = 0; k < scoreArray.length; k++){
        max = -1;
        for (var inner = 0; inner < scoreArray.length; inner++){
            if(scoreArray[inner] > max){
                max = scoreArray[inner];
                maxPos = inner;   
            }
        }
        storedNumber = scoreArray[maxPos];
        scoreArray[maxPos] = -1;
        
        console.log ('Iteration ' + (k+1) + ': maxPos is ' + maxPos);
        console.log ('Iteration ' + (k+1) + ': array is ' + scoreArray);
   
        if (storedNumber > 0){
            tCounter++;
            var d = document.createElement('div');
            d.className = 'indivArticleHolder';
            document.getElementById('innerSearchResultsHolder').appendChild(d);

            var t = document.createElement('a');
            t.className = 'titleLink';
            var innerLink = document.createTextNode(entireWebsite[maxPos].title);
            t.appendChild(innerLink);
            t.setAttribute('href', entireWebsite[maxPos].link);
            t.setAttribute('target', '_blank');
            document.getElementsByClassName('indivArticleHolder')[tCounter].appendChild(t);

            if(entireWebsite[maxPos].hasOwnProperty('description')){
                var des = document.createElement('div');
                des.innerHTML = entireWebsite[maxPos].description;
                des.className = 'description';
                document.getElementsByClassName('indivArticleHolder')[tCounter].appendChild(des);
            }

            var keyWord = document.createElement('p');
            keyWord.innerHTML = 'Matched Keywords:';
            keyWord.className = 'keyWordText';
            document.getElementsByClassName('indivArticleHolder')[tCounter].appendChild(keyWord);

            for (var m = 0; m < subScoreArray[maxPos].length; m++){
                var indivKeyWord = document.createElement('span');
                indivKeyWord.className = 'indivKeyWord';
                indivKeyWord.innerHTML = subScoreArray[maxPos][m];
                document.getElementsByClassName('keyWordText')[tCounter].appendChild(indivKeyWord);
            }
        }
    }

    document.getElementById('innerSearchResult1').innerHTML = tCounter + 1;
    document.getElementById('innerSearchResult2').innerHTML = document.getElementById('searchBox').value;
}

function clearSearch(){
    document.getElementById('searchBox').value = '';
    document.getElementById('searchResultsHolder').style.display = 'none';
}

function showHide(){
    zz++;
    if(zz%2 === 0){
        document.getElementById('explanationRevealed').style.display = 'none';
    }else{
        document.getElementById('explanationRevealed').style.display = 'block';
    }
}

document.getElementById('searchButton').addEventListener('click', search);
document.getElementById('clearSearch').addEventListener('click', clearSearch);
document.getElementById('explanation').addEventListener('click', showHide);
