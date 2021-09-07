---
title: "100 Tehtävää"
permalink: /100-tehtavaa/
excerpt: "100 Tehtävää"
layout: single
author_profile: false
sitemap: false
modified: 2021-09-06
---
<form
  id='form'
  action="https://formspree.io/f/myyllbej"
  method="POST"
>
    <label style="display: flex;">
        Ryhmä:
        <input type="text" name="ryhma" style="margin: 0px 0px 10px 10px;">
    </label>
</form>
<script type="text/javascript">
  function addRows()
  {
    var texts = ['1. Juo',
      '2. Tee 10 punnerrusta',
      '3. Tee 10 vatsalihasliikettä',
      '4. Kerro suosikkijuomastasi',
      '5. Minkä tähden? ',
      '6. Skål',
      '7. Huuda ainejärjestösi nimi (täysillä)',
      '8. Laula mikä tahansa laulu',
      '9. Soita ilmakitaraa',
      '10. Mikä biisi: ❓👨💻🤫,➡🤬🔥  ',
      '11. Kerro vitsi',
      '12. Mee töihin',
      '13. Imitoi norsua',
      '14. Pyydä rastinpitäjiltä anteeksi',
      '15. Kumarra rastinpitäjiä',
      '16. Esitä fuksiaisten tunnusmusiikki',
      '17. Luettele 5 Suomen kaupunkia',
      '18. Luettele 5 Afrikan maata',
      '19. Luettele 5 Suomen presidenttiä',
      '20. Kerro salaisuutesi',
      '21. Tilaa olut 4 eri kielellä',
      '22. Olette risteilyllä ',
      '23. Heitä ylävitoset kaverille',
      '24. Mikä biisi: 🙋‍♀😇🌧⬇🌍',
      '25. Heitä ylävitoset itsellesi',
      '26. Tehkää salainen "handshake"',
      '27. Ota kaveri reppuselkään',
      '28. Juokse kaveri reppuselässä rastinpitäjien ympäri',
      '29. Ota kaveri syliin',
      '30. Esitelkää itsenne rastinpitäjille',
      '31. Juokse kaveri sylissä rastinpitäjien ympäri',
      '32. Hae nimikirjoitus toisen ryhmän jäseneltä',
      '33. Tee kuperkeikka',
      '34. Tee takaperinkuperkeikka',
      '35. Tee kärrynpyörä',
      '36. Esitä breakdance-taitosi',
      '37. Juokse hidastetusti',
      '38. Juokse kuin Naruto  ',
      '39. Tehkää ihmispyramidi',
      '40. Alienit tulevat, suojautukaa',
      '41. Tehkää aalto, joka pyörii ainakin 2 kierrosta',
      '42. Oispa? ',
      '43. Laulakaa kuorossa "Let It Go"',
      '44. Laulakaa ruotsiksi "Let It Go"',
      '45. Peto on irti',
      '46. Vakuuta itsellesi ääneen, miksi Cola on parempi kuin Pepsi',
      '47. Vakuuta itsellesi ääneen, miksi Pepsi on parempi kuin Cola',
      '48. Esittäkää oikeaoppinen puhuttelu-esittely-asia',
      '49. Soita Linkkarille',
      '50. Soita Humanistille',
      '51. Laita viesti Dumpparille',
      '52. Soita fuksille ',
      '53. Esitä Hamletin kuuluisin kohtaus "Ollako vaiko eikö olla"',
      '54. Esitä edellinen twistillä',
      '55. Tee Aku Ankka -imitaatio',
      '56. Mitä yhteistä on Joulupukilla ja Michael Jacksonilla?',
      '57. Tunnusta rakkautesi',
      '58. Tunnusta syntisi',
      '59. Tule ulos kaapista',
      '60. Tuo rastinpitäjälle oksa',
      '61. Tuo rastinpitäjälle juoma',
      '62. Tuo rastinpitäjälle ruokaa',
      '63. Juo juoma ykkösellä alas',
      '64. Galaksit räjähtää',
      '65. Laskeudu rankaisemaan kaikkia',
      '66. Nouse haudasta',
      '67. Vapaudu raudoista',
      '68. On tuomiopäivä',
      '69. On _:n nimipäivä',
      '70. Kuka maksaa?',
      '71. Wanna hear the most annoying sound in the world?',
      '72. Missä kissa istuu? ',
      '73. Laulakaa karaokea',
      '74. Käyttäkää mielikuvitustanne',
      '75. Tee LinkedIn-tili..',
      '76. .. ja connectoi rastinpitäjien kanssa ',
      '77. Jodlaa',
      '78. Esitä meemi',
      '79. Sitsatkaa',
      '80. Saunokaa',
      '81. Kirjoittakaa binäärinä jokin sana (ja sen käännös)',
      '82. Zumba',
      '83. Lausu aakkoset takaperin',
      '84. Tiputanssi',
      '85. Tee päivitys someen',
      '86. Hiljainen macarena',
      '87. Esitä haiku ',
      '88. Tarzan',
      '89. Istukaa',
      '90. Koodaajamies',
      '91. Esittäkää tv-mainos',
      '92. Kertokaa haalarimerkki-idea',
      '93. Hypätkää ilmaan yhtäaikaa',
      '94. Mellan sup',
      '95. Esitä vanhaa opiskelijaa',
      '96. Puhu savolaisittain',
      '97. Puhu rallienglantia',
      '98. Hurratkaa itsellenne',
      '99. Heittäkää kenkä',
      '100. Kiitä rastinpitäjiä',
    ];
    for (let i = 0; i < texts.length; i++) {
      addRow(texts[i], i);
    }
    var sumLabel = document.createElement('label');
    sumLabel.style.display = 'flex';
    sumLabel.innerHTML = 'Summa';
    document.getElementById('form').append(sumLabel);
    var sum = document.createElement('input');
    sum.type = 'text';
    sum.setAttribute('style', 'margin-left: 10px');
    sum.id = 'sum';
    sum.name = 'sum';
    sum.setAttribute('readonly', 'readonly');
    sumLabel.append(sum);
    var submit = document.createElement('button');
    submit.type = 'submit';
    submit.innerHTML = 'Lähetä';
    document.getElementById('form').append(submit);
  }
  function addRow(name, index)
  {
  	var label = document.createElement('label');
    label.style.display = 'flex';
    document.getElementById('form').append(label);
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('style', 'margin-right: 10px');
    checkbox.id = index;
    checkbox.name = name;
    checkbox.setAttribute('onClick', 'getCount()');
    label.append(checkbox);
    label.innerHTML = label.innerHTML + name;
  }
  document.addEventListener("DOMContentLoaded", function(){
    addRows();
  });
  function getCount()
  {
    document.getElementById('sum').value = document.querySelectorAll('input[type="checkbox"]:checked').length;
  }
</script>
