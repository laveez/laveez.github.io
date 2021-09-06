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
  action="https://formspree.io/f/myyllbej"
  method="POST"
>
    <label style="display: flex;">
        Ryhmä:
        <input type="text" name="ryhma" style="margin: 0px 0px 10px 10px;">
    </label>
    <!-- 1-10 -->
    <label style="display: flex;">
        <input type="checkbox" id="1" name="Juo" style="margin-right: 10px;" onclick="getCount()">
        1. Juo
    </label>
    <label style="display: flex;">
        <input type="checkbox" id="2" name="Tee 10 punnerrusta" style="margin-right: 10px;" onclick="getCount()">
        2. Tee 10 punnerrusta
    </label>
    <label style="display: flex;">
        <input type="checkbox" id="3" name="Tee 10 vatsalihasliikettä" style="margin-right: 10px;" onclick="getCount()">
        3. Tee 10 vatsalihasliikettä
    </label>
    <label style="display: flex;">
        <input type="checkbox" id="4" name="Kerro suosikkijuomastasi" style="margin-right: 10px;" onclick="getCount()">
        4. Kerro suosikkijuomastasi
    </label>
    <label style="display: flex;">
        <input type="checkbox" id="5" name="Skål" style="margin-right: 10px;" onclick="getCount()">
        5. Skål
    </label>
    <label style="display: flex;">
        <input type="checkbox" id="6" name="Huuda ainejärjestösi nimi (täysillä)" style="margin-right: 10px;" onclick="getCount()">
        6. Huuda ainejärjestösi nimi (täysillä)
    </label>
    <label style="display: flex;">
        <input type="checkbox" id="7" name="Laula mikä tahansa laulu" style="margin-right: 10px;" onclick="getCount()">
        7. Laula mikä tahansa laulu
    </label>
    <label style="display: flex;">
        <input type="checkbox" id="8" name="Soita ilmakitaraa" style="margin-right: 10px;" onclick="getCount()">
        8. Soita ilmakitaraa
    </label>
    <label style="display: flex;">
        <input type="checkbox" id="9" name="Esitä sivistynyttä" style="margin-right: 10px;" onclick="getCount()">
        9. Esitä sivistynyttä
    </label>
    <label style="display: flex;">
        <input type="checkbox" id="10" name="Kerro vitsi" style="margin-right: 10px;" onclick="getCount()">
        10. Kerro vitsi
    </label>
    <!-- 10-20 -->
    <!-- Sum -->
    <label style="display: flex;">
        Summa:
        <input type="text" id="sum" name="sum" style="margin-right: 10px;" readonly="readonly">
    </label>
    <!-- Submit -->
    <button type="submit">Lähetä</button>
</form>
<script type="text/javascript">
  function getCount()
  {
    document.getElementById('sum').value = document.querySelectorAll('input[type="checkbox"]:checked').length;
  }
</script>
