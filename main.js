// PLAY BUTTONS
//
//

var audio = new Audio();
var currentButton = null;

var playButtons = document.querySelectorAll(".play");

for (var i = 0; i < playButtons.length; i++) {
  	playButtons[i].addEventListener("click", onPlayClick);
}

function onPlayClick(event) {
	var button = event.currentTarget;

	// Turn off the highlight on the previous button
	if (currentButton !== null) {
		currentButton.classList.remove("on");
	}

	if (currentButton === button && !audio.paused) {
		audio.pause();
		currentButton = null;
		return;
	}

	// The file name is in data-src in the HTML
	audio.src = button.getAttribute("data-src");
	audio.play();
	button.classList.add("on");
	currentButton = button;
	}

	audio.addEventListener("ended", function () {
	if (currentButton !== null) {
		currentButton.classList.remove("on");
	}
	currentButton = null;
});

// LANGUAGE TOGGLE
//
//

var introJa =
  "ようこそ！ このリポジトリでは、東方紅魔郷の全曲のMIDIアレンジを公開しています。<br>" +
  "どの曲も、耳コピとスペクトログラムの両方で再現したもので、勉強用です。今後、SC-88Proアレンジも追加するかもしれません。<br>" +
  "自由に聴いて、ダウンロードしてください。<br>" +
  "作曲に関する権利はすべて上海アリス幻樂団に帰属します。<br>" +
  "バグ報告や、より良い再現はGitHubで歓迎します。";

var howtoJa =
  "このページについて<br>" +
  "各行の先頭の <img src='Images/play00.GIF' alt='▶'> をクリックすると、その曲を再生します<br>" +
  "曲名をクリックすると、MIDIをダウンロードします<br>" +
  "44.1kHz 16bit WAVで録音（SD-90 USBオーディオ）、SonicFoundry SoundForgeで-14dB LUFSにマスタリングしています<br>" +
  "シーケンスはDomino MIDIエディタで、SC-88ProのサウンドトラックMIDIをおおまかに参考にしています<br>" +
  "<br>" +
  "<span class='badge-row'>" +
  "<img src='Images/sd90.png' alt='SD-90'>SD-90用のMIDI " +
  "<img src='Images/88pro.png' alt='88Pro'>SC-88Pro用のMIDI" +
  "</span><br>" +
  "ほかの音源では、意図した音にはなりません（例：Microsoft GS Wavetable）<br>" +
  "SD-80でも理論上は動きますが、AFXユニットがないため、かなり違う音になります";

var titleEn = document.title;
var titleJa = "東方紅魔郷 MIDIコレクション";

var toggleButton = document.getElementById("lang-toggle");
var introBox = document.querySelector(".intro");
var howtoBox = document.querySelector(".howto");

var translatable = document.querySelectorAll("[data-ja]");

// Save the English text
var introEn = introBox.innerHTML;
var howtoEn = howtoBox.innerHTML;
var englishText = [];
for (var i = 0; i < translatable.length; i++) {
  englishText.push(translatable[i].textContent);
}

function setLanguage(lang) {
	var i;

	if (lang === "ja") {
		document.title = titleJa;
		introBox.innerHTML = introJa;
		howtoBox.innerHTML = howtoJa;

		toggleButton.setAttribute(
		"data-tip",
		"日本語は話せません。\nこの文章は翻訳ツールを使って翻訳しました。\n間違いがあれば教えてください。",
		);

		for (i = 0; i < translatable.length; i++) {
		translatable[i].textContent = translatable[i].getAttribute("data-ja");
		}
	} else {
		document.title = titleEn;
		introBox.innerHTML = introEn;
		howtoBox.innerHTML = howtoEn;

		toggleButton.setAttribute(
		"data-tip",
		"I do not speak Japanese\nThe text was translated using translation tools\nReport any errors",
		);

		for (i = 0; i < translatable.length; i++) {
		translatable[i].textContent = englishText[i];
		}
	}

	document.documentElement.lang = lang;

	// Underline the language that is currently active
	toggleButton
		.querySelector("[data-l='en']")
		.classList.toggle("active", lang === "en");
	toggleButton
		.querySelector("[data-l='ja']")
		.classList.toggle("active", lang === "ja");

	// Remember the choice for next visit
	localStorage.setItem("lang", lang);
}

// Start in the saved language (English if nothing is saved)
var currentLang = localStorage.getItem("lang") || "en";
	setLanguage(currentLang);

	// Clicking the toggle switches to the other language
	toggleButton.addEventListener("click", function () {
	if (currentLang === "en") {
		currentLang = "ja";
	} else {
		currentLang = "en";
	}

	setLanguage(currentLang);
});

// LATEST COMMIT
//
//

var latestBox = document.getElementById("latest-update");
var latestDate = document.getElementById("latest-date");
var latestMsg = document.getElementById("latest-msg");

function showLatest(c) {
	var d = new Date(c.commit.author.date);
	var yyyy = d.getFullYear();
	var mm = ("0" + (d.getMonth() + 1)).slice(-2);
	var dd = ("0" + d.getDate()).slice(-2);

	latestDate.textContent = yyyy + "/" + mm + "/" + dd + " -";
	// Only the first line of the commit message
	latestMsg.textContent = c.commit.message.split("\n")[0];
	latestMsg.href = c.html_url;
	latestBox.hidden = false;
}

// Cache for 10 min since the API allows only 60 requests
var cached = null;
try {
	cached = JSON.parse(sessionStorage.getItem("latestCommit"));
} catch (e) {}

if (cached && Date.now() - cached.time < 600000) {
	showLatest(cached.data);
} else {
	fetch("https://api.github.com/repos/SimTheNep/Embodiment-of-Scarlet-Devil-for-Edirol-SD-90-Native/commits?per_page=1")
		.then(function (r) { return r.json(); })
		.then(function (list) {
			showLatest(list[0]);
			sessionStorage.setItem(
				"latestCommit",
				JSON.stringify({ time: Date.now(), data: list[0] })
			);
		})
		.catch(function () {
			// On failure the note just stays hidden
		});
}