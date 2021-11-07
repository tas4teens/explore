var entireWebsite = [
    {title: 'Alcohol use and its dangers', link: '/substances/alcohol.html', description: 'This page goes into detail about alcohol use and alcohol use disorder (AUD). DSM-5 diagnosis, how alcohol works in the body, treatment methods of AUD, and more are covered.', keywords: ['aud', 'alcohol', 'use', 'disorder', 'treatment', 'liver', 'substance', 'substances', 'adolescent', 'adolescents', 'cancer', 'binge', 'drinking', 'beer', 'wine', 'dependence', 'dsm-5', 'dsm', '5', 'gaba', 'glutamate', 'depressant', 'neurotransmitter', 'neurotransmitters', 'kidney', 'lung', 'adh', 'antiduretic', 'hormone', 'digestive', 'digestion', 'digesting', 'small', 'intestine', 'stomach', 'cost', 'alcoholics', 'anonymous', 'disulfram', 'naltrexone', 'acamprosrate', 'meaning', 'definition', 'addiction', 'define', 'withdrawal', 'help'], 
    subpages: [
        {title: 'Alcohol use and its dangers > What is AUD?', link: '/substances/alcohol.html/#aud', keywords: ['aud', 'alcohol', 'use', 'disorder', 'adolescents', 'dependence', 'meaning', 'definition', 'define']}, 
        {title: 'Alcohol use and its dangers > DSM-5 diagnosis', link: '/substances/alcohol.html/#dsm5', keywords: ['aud', 'alcohol', 'use', 'disorder', 'adolescents', 'dsm5', 'dsm', '5', 'dsm-5', 'diagnosis', 'dependence', 'withdrawal', 'craving', 'tolerance']},
        {title: 'Alcohol use and its dangers > How alcohol works in your body', link: '/substances/alcohol.html/#effects', keywords: ['aud', 'alcohol', 'use', 'disorder', 'adolescents', 'gaba', 'glutamate', 'lung', 'blood', 'blood vessel', 'blood vessels', 'liver', 'neurotransmitter', 'neurotransmitters', 'neuron', 'neurons', 'cardiac', 'arrest', 'arrythmia,', 'adh', 'antiduretic', 'hormone', 'liver', 'cancer', 'dna', 'acetaldehyde', 'digestive', 'digestion', 'digesting', 'digestive','hemorrhoids', 'hemorrhoid', 'malnutrition', 'ulcer', 'stomach', 'small', 'intestine', 'tract', 'dilate', 'dilation']},
        {title: 'Alcohol use and its dangers > Statistics', link: '/substances/alcohol.html/#stats', keywords: ['aud', 'alcohol', 'use', 'disorder', 'adolescents', 'cost', 'global', 'national', 'nation', 'death', 'number', 'die', 'world', 'worldwide', 'nationwide', 'us', 'united states', 'usa']},
        {title: 'Alcohol use and its dangers > Treatment', link: '/substances/alcohol.html/#treatment', keywords: ['aud', 'alcohol', 'use', 'disorder', 'adolescents', 'help', 'motivation', 'treatment', 'alcoholics', 'anonymous', 'disulfram', 'naltrexone', 'acamprosrate', 'therapy', 'therapist']}
        ]
    },

    {title: 'Nitrous Oxide - an everyday substance'}

];

var splitArray = [];

function search(){
    splitArray = document.getElementById('searchBox').ariaValueMax.split(' ');
}

document.getElementById('searchButton').addEventListener('click', search);