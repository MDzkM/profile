---
path: '/blog/2020/06/07/usb-pcap-problem-writeup-for-joints-20-finals'
date: '2020-05-19'
title: 'USB Pcap Problem Writeup for JOINTS 20 Finals'
tags: ['2020', 'ctf', 'forensics', 'finals', 'joints']
excerpt: 'It was fun so I thought I’d share it.'
---

**Before I begin, if you want to take a crack at this problem you can click *[here](./usb.pcapng)* for the package capture and click *[here](./index.html)*, *[here](./index.css)*, and *[here](./index.js)* for the html, css, and js respectively to run the simulated web environment. (I don't know if you can solve the problem without those but go for it if you want)**

Okay, now that that's out of the way, we can start by analyzing the pcap file provided using wireshark. At first there seems like nothing is of our interest in the data being displayed. There is only one direction of traffic from the source address *2.1.1* to the destination address *host*.

![Initial Wireshark Display](initial.png)

However, we can see that the whole traffic has a type of **INTERRUPT** which signals a keypress from the device. Another interesting find is the leftover data carried by every package contains a single printable byte each. (*That's curious...*)

![After First Inspection](first-inspection.png)

So to further analyze the traffic we want to display every leftover data by adding it as a column (**or by pressing *ctrl*+*shift*+*i***), removing every other column, and export it as a csv.

![Added Leftover Data Column](add-column.png)

![Remove Other Columns](remove-columns.png)

![Export as CSV](export-csv.png)

```
> cat leftover.csv
"Leftover Capture Data","Info"
"00004f0000000000","URB_INTERRUPT in"
"0000000000000000","URB_INTERRUPT in"
"00004f0000000000","URB_INTERRUPT in"
"0000000000000000","URB_INTERRUPT in"
"00004f0000000000","URB_INTERRUPT in"
"0000000000000000","URB_INTERRUPT in"
"00004f0000000000","URB_INTERRUPT in"
"0000000000000000","URB_INTERRUPT in"
"00004f0000000000","URB_INTERRUPT in"
"0000000000000000","URB_INTERRUPT in"
"00004f0000000000","URB_INTERRUPT in"
"0000000000000000","URB_INTERRUPT in"
"00004f0000000000","URB_INTERRUPT in"
"0000000000000000","URB_INTERRUPT in"
"00004f0000000000","URB_INTERRUPT in"
"0000000000000000","URB_INTERRUPT in"
...
```

Then, you'd want to convert it into a txt and strip any trailing data (if there's any) by running this command in the terminal.

```bash
cat [INPUT_FILE].csv | cut -d "," -f 1 | cut -d "\"" -f 2 | grep -vE [FIELD_NAME] > [OUTPUT_FILE].txt
```

From the code segment above we can see that ```cut -d "," -f 1``` is used to separate each fields by the comma and getting the first field only, ```cut -d "\"" -f 1``` is used to remove the quotation marks from the remaining data, and ```grep -vE [FIELD_NAME]``` is used to output everything except the field name which in our case would be **"Leftover Capture Data"** and the input and output filename would both be **"leftover"**.

After that, let's move on to the simulated web page and the javascript.

![View Simulated Web Page](simulated-web-page.png)

![View javascript](javascript.png)

Things are starting to make sense now. Based on [this](https://css-tricks.com/snippets/javascript/javascript-keycodes/) website (although explicitly written in the js code comments), each conditional statement represents an arrow key or the *Enter* key being pressed.

When you look at the leftover data, there is only five variants of bytes, either: 28, 4F, 50, 51, 52. (or in decimal: 40, 79, 80, 81, or 82)

**These must be the arrow keys and the *Enter*!**

```
> cat leftover.txt
00004f0000000000
0000000000000000
00004f0000000000
0000000000000000
00004f0000000000
0000000000000000
00004f0000000000
0000000000000000
00004f0000000000
0000000000000000
00004f0000000000
0000000000000000
00004f0000000000
0000000000000000
00004f0000000000
0000000000000000
00004f0000000000
...
```

The rest is probably the easier part, we only need to make a script to read the leftover data, convert each byte to its respective key, and simulate the entire thing.

```python
flag = ""

with open("leftover.txt") as file:
    KEY_MAP = {
        40: 'Enter',
        79: 'Right',
        80: 'Left',
        81: 'Down',
        82: 'Up'
    }

    UPPERCASE_LETTERS = {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
        5: "E",
        6: "F",
        7: "G",
        8: "H",
        9: "I",
        10: "J",
        11: "K",
        12: "L",
        13: "M",
        14: "N",
        15: "O",
        16: "P",
        17: "Q",
        18: "R",
        19: "S",
        20: "T",
        21: "U",
        22: "V",
        23: "W",
        24: "X",
        25: "Y",
        26: "Z"
    }

    LOWERCASE_LETTERS = {
        1: "a",
        2: "b",
        3: "c",
        4: "d",
        5: "e",
        6: "f",
        7: "g",
        8: "h",
        9: "i",
        10: "j",
        11: "k",
        12: "l",
        13: "m",
        14: "n",
        15: "o",
        16: "p",
        17: "q",
        18: "r",
        19: "s",
        20: "t",
        21: "u",
        22: "v",
        23: "w",
        24: "x",
        25: "y",
        26: "z"
    }

    NUMBERS_AND_SYMBOLS = {
        1: "0",
        2: "1",
        3: "2",
        4: "3",
        5: "4",
        6: "5",
        7: "6",
        8: "7",
        9: "8",
        10: "9",
        11: "{",
        12: "}",
        13: "!",
        14: "@",
        15: "#",
        16: "$",
        17: "%",
        18: "^",
        19: "&",
        20: "*",
        21: "(",
        22: ")",
        23: "/",
        24: "_",
        25: "Del"
    }
    
    col = 1
    row = 1

    for line in file:
        bytesArray = bytearray.fromhex(line.strip())

        for byte in bytesArray:
            if (byte != 0 and int(byte) in KEY_MAP):
                key_value = int(byte)

                if (KEY_MAP[key_value] == "Right" and col < 26):
                    col += 1
                elif (KEY_MAP[key_value] == "Left" and col > 1):
                    col -= 1
                elif (KEY_MAP[key_value] == "Up" and row > 1):
                    row -= 1
                elif (KEY_MAP[key_value] == "Down" and row < 3):
                    row += 1
                
                if (col == 26 and row == 3):
                    col = 25

                if (KEY_MAP[key_value] == "Enter"):
                    if (row == 3 and col == 25):
                        flag = flag[:-1]
                    elif (row == 1):
                        flag += UPPERCASE_LETTERS[col]
                    elif (row == 2):
                        flag += LOWERCASE_LETTERS[col]
                    elif (row == 3):
                        flag += NUMBERS_AND_SYMBOLS[col]

print(flag)
```

Funny thing is, since we don't actually know which byte is what key, we need to do a little guesswork here, but, there are a few things we can rule out. The first is the *Enter* key, we can assume that the only separated byte that doesn't follow the sequence [**40**, 79, 80, 81, 82] is the *Enter* key. Also, since the starting highlighted position is on the upper left corner, we can rule out the left or up keys represent the first byte because it wouldn't make sense. What's left is just a few combinations and by using trial and error we would finally get the flag!

> Flag: **joints20{pC4P_AND_It5_eZ1}**