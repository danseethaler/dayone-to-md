# dayone-to-markdown

## The Problem

You love using the DayOne journaling app to record all your amazing thoughts! But you want to get those entries into a markdown format so you can publish them to your own blog or website.

## The Solution

The DayOne app currently allows an export of entries to a JSON format. This package will unzip the DayOne output and convert all the entries in `Journal.json` into individual markdown files. By default some metadata from the entry is added as frontmatter to the top of each `.md` file. The photos and links to other entries are also converted into a relative markdown link.

