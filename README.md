# dayone-to-markdown

## The Problem

You love using the DayOne journaling app to record all your amazing thoughts! But you want to get those entries into a markdown format so you can publish them to your own blog or website.

## The Solution

The DayOne app currently allows an export of entries to a JSON format. This package will unzip the DayOne output and convert all the entries in `Journal.json` into individual markdown files. By default some metadata from the entry is added as frontmatter to the top of each `.md` file. The photos and links to other entries are also converted into a relative markdown link.

## Usage

First add the output zip file from DayOne->Export to JSON into a folder titled `dayone` at the root of your project. Then add an npm script with the `dayone-to-md` bin i.e. `"scripts": {"convert": "dayone-to-md"}`. Now you can run `npm run convert`! The markdown files get output to `src/entries` and the photos are put in the `public/static` directory by default.
