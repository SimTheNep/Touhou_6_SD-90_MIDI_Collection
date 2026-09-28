# Touhou 6: The Embodiment of Scarlet Devil - Edirol SD-90 Native MIDI Project

[![Project Status: WIP](https://img.shields.io/badge/Status-Work%20In%20Progress-orange.svg)](#disclaimer)

A comprehensive project dedicated to delivering hardware-native MIDI files for the entire **Touhou 6: The Embodiment of Scarlet Devil (東方紅魔郷)** soundtrack. These sequences were created specifically to recreate the tracks for study, in partnership with the [Touhou Sound Sources Sheet](tinyurl.com/TouhouSheet). All compositional rights go to Team Shanghai Alice.

### [YouTube Demo](https://www.youtube.com/watch?v=3Bd5__hFrOY)

## ⚠️ Disclaimer ⚠️

> **WORK IN PROGRESS (WIP):** This repository is an active, ongoing music recreation project. The MIDI files, System Exclusive (SysEx) dumps, and parameter mappings are subject to frequent changes as new discoveries are made. These arranges were made by ear so the mastering isn't perfect and there are some sections that are more inaccurate than others, be patient.

### This project includes...
* MIDI Files
* WAV Recordings

## 🎹 Hardware Context

The **Edirol / Roland SD-90** is a Desktop USB Audio Interface and MIDI Sound Module released in 2001. After November 25th 2001 (date of purchase), it became the foundation of ZUN's initial Windows-era arrangement style.

* **Audio Processing:** Features 24-bit AD/DA signal processing with a supported 44.1 kHz / 48 kHz sampling rate. The integrated USB audio streaming interface operates at 16/24-bit resolution across 2 stereo inputs and 2 stereo outputs.
* **Synthesis Engine:** A 32-part multi-timbral sound module utilizing 1,050 preset sounds and 30 drum sets, with 128-voice maximum polyphony structure.
* **Onboard Effects System:** Hardware effects include standard global System Effects, alongside dedicated multi-effects and mixer master effects.
* **Hardware & Connectivity:** Features a 128 x 64 dot graphic LCD display. Includes 2 external MIDI inputs/outputs, independent S/PDIF optical and coaxial digital audio I/O, dual stereo analog output jack sets, a dedicated microphone/guitar high-impedance input, and a stereo headphone jack monitor.

<p align="center">
  <img src="https://raw.githubusercontent.com/SimTheNep/Embodiment-of-Scarlet-Devil-for-Edirol-SD-90-Native/main/sd90.jpg" alt="Edirol SD-90 Studio Canvas" width="600"/><br>
  <em>The Edirol SD-90 Studio Canvas unit used for the project</em>
</p>

### Playback Requirements
For authentic rendering, it is highly recommended to stream these files out to an **actual physical Edirol SD-90 unit** via a software sequencer capable of raw SysEx processing (such as **Sekaiju** or **MIDITrail**). Soft-synths (like VirtualMIDISynth or generic Windows GS Wavetable) will not execute the embedded patch variations or hardware filtering commands properly.
These MIDIs work on the **Edirol SD-80** in theory, but since it has **no AFX processing unit**, the sound will be much different.

## 🎵 Soundtrack & Track List

<p align="center">
  <img src="https://raw.githubusercontent.com/SimTheNep/Embodiment-of-Scarlet-Devil-for-Edirol-SD-90-Native/main/Th06cover.jpg" alt="The Embodiment of Scarlet Devil Cover" width="350"/>
</p>

| #      | Title / Localization                                    | Tuning | Project Files                                                                 |
| :----- | :------------------------------------------------------ | :----: | :---------------------------------------------------------------------------- |
| **--** | **Main Menu**                                           |  ----  | ----/----                                                                     |
| **01** | `赤より紅い夢 - A Dream more Scarlet than Red`                |  440Hz | [MIDI](./MIDIs/th06_01-SD90_440Hz.mid) / [WAV](./WAVS/th06_01-SD90_440Hz.wav) |
| **--** | **Stage 1**                                             |  ----  | ----/----                                                                     |
| **02** | `ほおずきみたいに紅い魂 - A Soul as Scarlet as a Ground Cherry`    |  432Hz | [MIDI](./MIDIs/th06_02-SD90_432Hz.mid) / [WAV](./WAVS/th06_02-SD90_432Hz.wav) |
| **03** | `妖魔夜行 - Apparitions Stalk the Night`                    |  452Hz | [MIDI](./MIDIs/th06_03-SD90_452Hz.mid) / [WAV](./WAVS/th06_03-SD90_452Hz.wav) |
| **--** | **Stage 2**                                             |  ----  | ----/----                                                                     |
| **04** | `ルーネイトエルフ - Lunate Elf`                                 |  440Hz | [MIDI](./MIDIs/th06_04-SD90_440Hz.mid) / [WAV](./WAVS/th06_04-SD90_440Hz.wav) |
| **05** | `おてんば恋娘 - Beloved Tomboyish Daughter`                   |  446Hz | [MIDI](./MIDIs/th06_05-SD90_446Hz.mid) / [WAV](./WAVS/th06_05-SD90_446Hz.wav) |
| **--** | **Stage 3**                                             |  ----  | ----/----                                                                     |
| **06** | `上海紅茶館 ～ Chinese Tea - Shanghai Teahouse ~ Chinese Tea` |  443Hz | [MIDI](./MIDIs/th06_06-SD90_443Hz.mid) / [WAV](./WAVS/th06_06-SD90_443Hz.wav) |
| **07** | `明治十七年の上海アリス - Shanghai Alice of Meiji 17`              |  428Hz | [MIDI](./MIDIs/th06_07-SD90_428Hz.mid) / [WAV](./WAVS/th06_07-SD90_428Hz.wav) |
| **--** | **Stage 4**                                             |  ----  | ----/----                                                                     |
| **08** | `ヴワル魔法図書館 - Voile, the Magic Library`                   |  452Hz | [MIDI](./MIDIs/th06_08-SD90_452Hz.mid) / [WAV](./WAVS/th06_08-SD90_452Hz.wav) |
| **09** | `ラクトガール ～ 少女密室 - Locked Girl ~ The Girl's Secret Room`  |  452Hz | [MIDI](./MIDIs/th06_09-SD90_452Hz.mid) / [WAV](./WAVS/th06_09-SD90_452Hz.wav) |
| **--** | **Stage 5**                                             |  ----  | ----/----                                                                     |
| **10** | `メイドと血の懐中時計 - The Maid and the Pocket Watch of Blood`   |  452Hz | [MIDI](./MIDIs/th06_10-SD90_452Hz.mid) / [WAV](./WAVS/th06_10-SD90_452Hz.wav) |
| **11** | `月時計 ～ ルナ・ダイアル - Lunar Clock ~ Luna Dial`               |  450Hz | [MIDI](./MIDIs/th06_11-SD90_450Hz.mid) / [WAV](./WAVS/th06_11-SD90_450Hz.wav) |
| **--** | **Stage 6**                                             |  ----  | ----/----                                                                     |
| **12** | `ツェペシュの幼き末裔 - The Young Descendant of Tepes`            |  446Hz | [MIDI](./MIDIs/th06_12-SD90_446Hz.mid) / [WAV](./WAVS/th06_12-SD90_446Hz.wav) |
| **13** | `亡き王女の為のセプテット - Septette for the Dead Princess`         |  452Hz | [MIDI](./MIDIs/th06_13-SD90_452Hz.mid) / [WAV](./WAVS/th06_13-SD90_452Hz.wav) |
| **--** | **EX Stage**                                            |  ----  | ----/----                                                                     |
| **14** | `魔法少女達の百年祭 - The Centennial Festival for Magical Girls` |  440Hz | [MIDI](./MIDIs/th06_14-SD90_440Hz.mid) / [WAV](./WAVS/th06_14-SD90_440Hz.wav) |
| **15** | `U.N.オーエンは彼女なのか？ - U.N. Owen Was Her?`                  |  428Hz | [MIDI](./MIDIs/th06_15-SD90.mid) / [WAV](./WAVS/th06_15-SD90.wav)             |
| **--** | **Post-Game**                                           |  ----  | ----/----                                                                     |
| **16** | `紅より儚い永遠 - An Eternity More Transient Than Scarlet`     |  446Hz | [MIDI](./MIDIs/th06_16-SD90_446Hz.mid) / [WAV](./WAVS/th06_16-SD90_446Hz.wav) |
| **17** | `紅楼 ～ Eastern Dream - Crimson Tower ~ Eastern Dream`    |  452Hz | [MIDI](./MIDIs/th06_17-SD90_452Hz.mid) / [WAV](./WAVS/th06_17-SD90_452Hz.wav) |

## 🙇‍♀️ Contributing & Bug Reports

Since these arrangements are actively being developed:
* If you discover a new finding or patch map, an unassigned channel allocation, or have a better reproduction of the parameters, please open an **Issue** outlining the track title and timestamp.
* Pull Requests optimizing structural metadata are highly welcome!
