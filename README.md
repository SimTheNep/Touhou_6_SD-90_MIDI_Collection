# Touhou 6: The Embodiment of Scarlet Devil — Edirol SD-90 Native MIDI Project

[![Project Status: WIP](https://img.shields.io/badge/Status-Work%20In%20Progress-orange.svg)](#disclaimer)

A comprehensive project dedicated to delivering hardware-native MIDI files for the entire **Touhou 6: The Embodiment of Scarlet Devil (東方紅魔郷)** soundtrack. These sequences were created specifically to recreate the tracks for study in partnership with the [Touhou Sound Sources Sheet](tinyurl.com/TouhouSheet), all compositional rights go to Team Shanghai Alice.

---

## ! Disclaimer

> **WORK IN PROGRESS (WIP):** This repository is an active, ongoing music recreation project. The MIDI files, System Exclusive (SysEx) dumps, and parameter mappings are subject to frequent changes as new discoveries are made. These arranges were made by ear, be patient.

---

## Hardware Context

The **Edirol / Roland SD-90** is a Desktop USB Audio Interface and MIDI Sound Module released in 2001. After November 25th 2001 (date of purchase), it became the foundation of ZUN's initial Windows-era arrangement style.

### Technical Profile
* **Audio Processing:** Features 24-bit AD/DA signal processing with a supported 44.1 kHz / 48 kHz sampling rate. The integrated USB audio streaming interface operates at 16/24-bit resolution across 2 stereo inputs and 2 stereo outputs.
* **Synthesis Engine:** A 32-part multi-timbral sound module utilizing 1,050 preset sounds and 30 drum sets, with 128-voice maximum polyphony structure.
* **Onboard Effects System:** Hardware effects include standard global System Effects consisting of 6 reverb types and 6 chorus types, alongside dedicated multi-effects (9 types available across 3 hardware insertion multi-effect chains).
* **Hardware & Connectivity:** Features a 128 x 64 dot graphic LCD display. Includes 2 external MIDI inputs/outputs, independent S/PDIF optical and coaxial digital audio I/O, dual stereo analog output jack sets, a dedicated microphone/guitar high-impedance input, and a stereo headphone jack monitor.

<p align="center">
  <img src="https://raw.githubusercontent.com/SimTheNep/Embodiment-of-Scarlet-Devil-for-Edirol-SD-90-Native/main/images/sd90.jpg" alt="Edirol SD-90 Studio Canvas" width="600"/><br>
  <em>The Edirol SD-90 Studio Canvas unit used for the project</em>
</p>

---

## Production Environment & Workflow

To achieve an authentic recreation of the tracks, the following programs were used:

* **Sequencing & Composition:** Primary sequencing and control change (CC) was carried out within [FL Studio](https://www.image-line.com/fl-studio/) based on ZUN's **SC-88Pro** MIDIs.
* **Low-Level MIDI Editing:** Raw SysEx structure and meta-event management were configured via [Sekaiju (世界樹)](https://openmidiproject.osdn.jp/Sekaiju_en.html).
* **SysEx Integration:** Native parameter configurations variables were injected directly using the hexadecimal code exported from the [Edirol SD-80 Editor](https://www.cosmosmusic.com/support/download_read.php?no=9772) and [Edirol SD-90 Editor]([https://www.roland.com/global/support/by_product/sd-90/updates_drivers/](https://sd-90-editor.software.informer.com/)).
* **Audio Mastering & Demos:** Demo audio captures from the SD-90 outputs were compiled and mastered using **Sonic Foundry Sound Forge 6.0**, the exact audio editing software used by ZUN for rendering the original game soundtracks.

For those requiring the [SD-90 drivers](https://www.roland.com/global/support/by_product/sd-90/updates_drivers/), [here's a link to a tutorial on how to install them.](https://www.youtube.com/watch?v=-2aSb4q2Kvw)

---

## MIDI/Audio Specifications

* **MIDI/Audio Input/Output method:** USB (I don't have a MIDI interface and my audio interface is mono).
* **Audio resolution: 16-bit 44.1kHz .WAV (Same as EoSD's recordings)**
* **Master Tuning:** `Varied` (Unfortunately SysEx doesn't allow me to set it automatically).
* **MIDI Mode:** Native SD-90 Mode (Utilizing unique parameters not compatible with generic GS/GM2/XGlite modes).
* **Data Header:** SysEx triggers initialized to prep the Studio Canvas engine before note playback begins.

---

## Soundtrack & Track List

<p align="center">
  <img src="https://raw.githubusercontent.com/SimTheNep/Embodiment-of-Scarlet-Devil-for-Edirol-SD-90-Native/main/images/th06_cover.png" alt="The Embodiment of Scarlet Devil Cover" width="350"/>
</p>

### Main Game Tracks

| # | Title / Localization | Tuning |
| :--- | :--- | :---: |
| **01** | `赤より紅い夢  - A Dream more Scarlet than Red` | 440Hz |
| **02** | `ほおずきみたいに紅い魂  - A Soul as Scarlet as a Ground Cherry` | 432Hz |
| **03** | `妖魔夜行  - Apparitions Stalk the Night` | 452Hz |
| **04** | `ルーネイトエルフ  - Lunate Elf` | 440Hz |
| **05** | `おてんば恋娘  - Beloved Tomboyish Daughter` | 446Hz |
| **06** | `上海紅茶館 ～ Chinese Tea  - Shanghai Teahouse ~ Chinese Tea` | 443Hz |
| **07** | `明治十七年の上海アリス  - Shanghai Alice of Meiji 17` | 428Hz |
| **08** | `ヴワル魔法図書館  - Voile, the Magic Library` | 452Hz |
| **09** | `ラクトガール ～ 少女密室  - Locked Girl ~ The Girl's Secret Room` | 452Hz |
| **10** | `メイドと血の懐中時計  - The Maid and the Pocket Watch of Blood` | 452Hz |
| **11** | `月時計 ～ ルナ・ダイアル  - Lunar Clock ~ Luna Dial` | 450Hz |
| **12** | `ツェペシュの幼き末裔  - The Young Descendant of Tepes` | 446Hz |
| **13** | `亡き王女の為のセプテット  - Septette for the Dead Princess` | 452Hz |

### Extra Stage & Post-Game Tracks

| # | Title / Localization / Arranger | Tuning |
| :--- | :--- | :---: |
| **14** | `魔法少女達の百年祭  - The Centennial Festival for Magical Girls` | 440Hz |
| **15** | `U.N.オーエンは彼女なのか？  - U.N. Owen Was Her?` | 428Hz |
| **16** | `紅より儚い永遠  - An Eternity More Transient Than Scarlet` | 446Hz |
| **17** | `紅楼 ～ Eastern Dream  - Crimson Tower ~ Eastern Dream` | 452Hz |

---

## System Exclusive (SysEx) Implementations

1.  **SD-80/SD-90 Editor Mappings:** TFA, TVF, and custom Multi-FX (MFX) and Audio-FX (AFX) routines are preset at tick `00:00:00`.
2.  **Part Control Strings:** Assigns the appropriate instrument sets across the 16 MIDI playback channels.

### Playback Requirements
For authentic rendering, it is highly recommended to stream these files out to an **actual physical Edirol SD-90 unit** via a software sequencer capable of raw SysEx processing (such as **Sekaiju** or **MIDITrail**). Soft-synths (like VirtualMIDISynth or generic Windows GS Wavetable) will not execute the embedded patch variations or hardware filtering commands properly.
These MIDIs work on the Edirol SD-80 in theory, but since it has no AFX processing unit, the sound will be much different.

---

## Contributing & Bug Reports

Since these arrangements are actively being developed:
* If you discover a new finding or patch map, an unassigned channel allocation, or have a better reproduction of the parameters, please open an **Issue** outlining the track title and timestamp.
* Pull Requests optimizing structural metadata are highly welcome!
