# Touhou 6: The Embodiment of Scarlet Devil - Edirol SD-90 Native MIDI Project

[![Project Status: WIP](https://img.shields.io/badge/Status-Work%20In%20Progress-orange.svg)](#disclaimer)

A comprehensive project dedicated to delivering hardware-native MIDI files for the entire **Touhou 6: The Embodiment of Scarlet Devil (東方紅魔郷)** soundtrack. These sequences were created specifically to recreate the tracks for study, in partnership with the [Touhou Sound Sources Sheet](tinyurl.com/TouhouSheet). All compositional rights go to Team Shanghai Alice.

### [YouTube Demo](https://www.youtube.com/watch?v=3Bd5__hFrOY)

---

## ⚠️ Disclaimer ⚠️

> **WORK IN PROGRESS (WIP):** This repository is an active, ongoing music recreation project. The MIDI files, System Exclusive (SysEx) dumps, and parameter mappings are subject to frequent changes as new discoveries are made. These arranges were made by ear so the mastering isn't perfect and there are some sections that are more inaccurate than others, be patient.

### This project includes...
* SD-90/SD-80 Editor Files
* MIDI Files
* WAV Recordings


---

## 🎹 Hardware Context

The **Edirol / Roland SD-90** is a Desktop USB Audio Interface and MIDI Sound Module released in 2001. After November 25th 2001 (date of purchase), it became the foundation of ZUN's initial Windows-era arrangement style.

* **Audio Processing:** Features 24-bit AD/DA signal processing with a supported 44.1 kHz / 48 kHz sampling rate. The integrated USB audio streaming interface operates at 16/24-bit resolution across 2 stereo inputs and 2 stereo outputs.
* **Synthesis Engine:** A 32-part multi-timbral sound module utilizing 1,050 preset sounds and 30 drum sets, with 128-voice maximum polyphony structure.
* **Onboard Effects System:** Hardware effects include standard global System Effects consisting of 6 reverb types and 6 chorus types, alongside dedicated multi-effects (9 types available across 3 hardware insertion multi-effect chains).
* **Hardware & Connectivity:** Features a 128 x 64 dot graphic LCD display. Includes 2 external MIDI inputs/outputs, independent S/PDIF optical and coaxial digital audio I/O, dual stereo analog output jack sets, a dedicated microphone/guitar high-impedance input, and a stereo headphone jack monitor.

<p align="center">
  <img src="https://raw.githubusercontent.com/SimTheNep/Embodiment-of-Scarlet-Devil-for-Edirol-SD-90-Native/main/sd90.jpg" alt="Edirol SD-90 Studio Canvas" width="600"/><br>
  <em>The Edirol SD-90 Studio Canvas unit used for the project</em>
</p>

---

## 🎛️ Workflow

To achieve an authentic recreation of the tracks, the following programs were used:

* **Sequencing & Composition:** Sequencing and control change (CC) was carried out within [FL Studio](https://www.image-line.com/fl-studio/) based on ZUN's **SC-88Pro** MIDIs.
* **Low-Level MIDI Editing:** SysEx structure was configured via [Sekaiju (世界樹)](https://openmidiproject.osdn.jp/Sekaiju_en.html).
* **SysEx Integration:** Native parameter configurations variables were injected directly using the hexadecimal code exported from the [Edirol SD-80 Editor](https://www.cosmosmusic.com/support/download_read.php?no=9772) and [Edirol SD-90 Editor](https://sd-90-editor.software.informer.com/).
* **Audio Mastering & Demos:** Demo audio captures from the SD-90 outputs were compiled and mastered using [**Sonic Foundry Sound Forge**](https://en.wikipedia.org/wiki/Sound_Forge), the exact audio editing software used by ZUN for rendering the original game soundtracks (batch normalization done in Audacity).

For those requiring the [SD-90 drivers](https://www.roland.com/global/support/by_product/sd-90/updates_drivers/), [here's a link to a tutorial on how to install them.](https://www.youtube.com/watch?v=-2aSb4q2Kvw)

### MIDI/Audio Specifications

* **Audio resolution: 16-bit 44.1kHz .WAV (Same as EoSD's recordings)**
* **Master Tuning:** `Varied` (Unfortunately SysEx doesn't allow me to set it automatically).
* **MIDI Mode:** Native SD-90 USB Audio Mode (Utilizing unique parameters not compatible with generic GS/GM2/XGlite modes).
* **Data Header:** SysEx triggers initialized to prep the Studio Canvas engine before note playback begins.

### System Exclusive (SysEx) Implementations

1.  **SD-80/SD-90 Editor Mappings:** TFA, TVF, and custom Multi-FX (MFX) and Audio-FX (AFX) routines are preset at tick `00:00:00`.
2.  **Part Control Strings:** Assigns the appropriate instrument sets across the 16 MIDI playback channels.

### Playback Requirements
For authentic rendering, it is highly recommended to stream these files out to an **actual physical Edirol SD-90 unit** via a software sequencer capable of raw SysEx processing (such as **Sekaiju** or **MIDITrail**). Soft-synths (like VirtualMIDISynth or generic Windows GS Wavetable) will not execute the embedded patch variations or hardware filtering commands properly.
These MIDIs work on the **Edirol SD-80** in theory, but since it has **no AFX processing unit**, the sound will be much different.

---

## 🎵 Soundtrack & Track List

<p align="center">
  <img src="https://raw.githubusercontent.com/SimTheNep/Embodiment-of-Scarlet-Devil-for-Edirol-SD-90-Native/main/Th06cover.jpg" alt="The Embodiment of Scarlet Devil Cover" width="350"/>
</p>

| # | Title / Localization | Tuning | Project Files | Editor Files |
| :--- | :--- | :---: | :---: | :---: |
| **--** | Main Menu | ---- | ----/---- | ------ |
| **01** | `赤より紅い夢  - A Dream more Scarlet than Red` | 440Hz | [MIDI](./MIDIs/th06_01-SD90_440Hz.mid) / [WAV](./WAVS/th06_01-SD90_440Hz.wav) | [Folder](./SD-80%2690%20Editor%20Files/th06/01) |
| **--** | Stage 1 | ---- | ----/---- | ------ |
| **02** | `ほおずきみたいに紅い魂  - A Soul as Scarlet as a Ground Cherry` | 432Hz | [MIDI](./MIDIs/th06_02-SD90_432Hz.mid) / [WAV](./WAVS/th06_02-SD90_432Hz.wav) | [Folder](./SD-80%2690%20Editor%20Files/th06/02) |
| **03** | `妖魔夜行  - Apparitions Stalk the Night` | 452Hz | [MIDI](./MIDIs/th06_03-SD90_452Hz.mid) / [WAV](./WAVS/th06_03-SD90_452Hz.wav) | [Folder](./SD-80%2690%20Editor%20Files/th06/03) |
| **--** | Stage 2 | ---- | ----/---- | ------ |
| **04** | `ルーネイトエルフ  - Lunate Elf` | 440Hz | [MIDI](./MIDIs/th06_04-SD90_440Hz.mid) / [WAV](./WAVS/th06_04-SD90_440Hz.wav) | [Folder](./SD-80%2690%20Editor%20Files/th06/04) |
| **05** | `おてんば恋娘  - Beloved Tomboyish Daughter` | 446Hz | [MIDI](./MIDIs/th06_05-SD90_446Hz.mid) / [WAV](./WAVS/th06_05-SD90_446Hz.wav) | [Folder](./SD-80%2690%20Editor%20Files/th06/05) |
| **--** | Stage 3 | ---- | ----/---- | ------ |
| **06** | `上海紅茶館 ～ Chinese Tea  - Shanghai Teahouse ~ Chinese Tea` | 443Hz | [MIDI](./MIDIs/th06_06-SD90_443Hz.mid) / [WAV](./WAVS/th06_06-SD90_443Hz.wav) | [Folder](./SD-80%2690%20Editor%20Files/th06/06) |
| **07** | `明治十七年の上海アリス  - Shanghai Alice of Meiji 17` | 428Hz | [MIDI](./MIDIs/th06_07-SD90_428Hz.mid) / [WAV](./WAVS/th06_07-SD90_428Hz.wav) | [Folder](./SD-80%2690%20Editor%20Files/th06/07) |
| **--** | Stage 4 | ---- | ----/---- | ------ |
| **08** | `ヴワル魔法図書館  - Voile, the Magic Library` | 452Hz | [MIDI](./MIDIs/th06_08-SD90_452Hz.mid) / [WAV](./WAVS/th06_08-SD90_452Hz.wav) | [Folder](./SD-80%2690%20Editor%20Files/th06/08) |
| **09** | `ラクトガール ～ 少女密室  - Locked Girl ~ The Girl's Secret Room` | 452Hz | [MIDI](./MIDIs/th06_09-SD90_452Hz.mid) / [WAV](./WAVS/th06_09-SD90_452Hz.wav) | [Folder](./SD-80%2690%20Editor%20Files/th06/09) |
| **--** | Stage 5 | ---- | ----/---- | ------ |
| **10** | `メイドと血の懐中時計  - The Maid and the Pocket Watch of Blood` | 452Hz | [MIDI](./MIDIs/th06_10-SD90_452Hz.mid) / [WAV](./WAVS/th06_10-SD90_452Hz.wav) | [Folder](./SD-80%2690%20Editor%20Files/th06/10) |
| **11** | `月時計 ～ ルナ・ダイアル  - Lunar Clock ~ Luna Dial` | 450Hz | [MIDI](./MIDIs/th06_11-SD90_450Hz.mid) / [WAV](./WAVS/th06_11-SD90_450Hz.wav) | [Folder](./SD-80%2690%20Editor%20Files/th06/11) |
| **--** | Stage 6 | ---- | ----/---- | ------ |
| **12** | `ツェペシュの幼き末裔  - The Young Descendant of Tepes` | 446Hz | [MIDI](./MIDIs/th06_12-SD90_446Hz.mid) / [WAV](./WAVS/th06_12-SD90_446Hz.wav) | [Folder](./SD-80%2690%20Editor%20Files/th06/12) |
| **13** | `亡き王女の為のセプテット  - Septette for the Dead Princess` | 452Hz | [MIDI](./MIDIs/th06_13-SD90_452Hz.mid) / [WAV](./WAVS/th06_13-SD90_452Hz.wav) | [Folder](./SD-80%2690%20Editor%20Files/th06/13) |
| **--** | EX Stage | ---- | ----/---- | ------ |
| **14** | `魔法少女達の百年祭  - The Centennial Festival for Magical Girls` | 440Hz | [MIDI](./MIDIs/th06_14-SD90_440Hz.mid) / [WAV](./WAVS/th06_14-SD90_440Hz.wav) | [Folder](./SD-80%2690%20Editor%20Files/th06/14) |
| **15** | `U.N.オーエンは彼女なのか？  - U.N. Owen Was Her?` | 428Hz | [MIDI](./MIDIs/th06_15-SD90_428Hz.mid) / [WAV](./WAVS/th06_15-SD90_428Hz.wav) | [Folder](./SD-80%2690%20Editor%20Files/th06/15) |
| **--** | Post-Game | ---- | ----/---- | ------ |
| **16** | `紅より儚い永遠  - An Eternity More Transient Than Scarlet` | 446Hz | [MIDI](./MIDIs/th06_16-SD90_446Hz.mid) / [WAV](./WAVS/th06_16-SD90_446Hz.wav) | [Folder](./SD-80%2690%20Editor%20Files/th06/16) |
| **17** | `紅楼 ～ Eastern Dream  - Crimson Tower ~ Eastern Dream` | 452Hz | [MIDI](./MIDIs/th06_17-SD90_452Hz.mid) / [WAV](./WAVS/th06_17-SD90_452Hz.wav) | [Folder](./SD-80%2690%20Editor%20Files/th06/17) |

---

## 🙇‍♀️ Contributing & Bug Reports

Since these arrangements are actively being developed:
* If you discover a new finding or patch map, an unassigned channel allocation, or have a better reproduction of the parameters, please open an **Issue** outlining the track title and timestamp.
* Pull Requests optimizing structural metadata are highly welcome!
