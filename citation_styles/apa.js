export const apaStyle = `<?xml version="1.0" encoding="utf-8"?>
<style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0" demote-non-dropping-particle="never" page-range-format="expanded">
  <info>
    <title>American Psychological Association 7th edition</title>
    <title-short>APA</title-short>
    <id>http://www.zotero.org/styles/apa</id>
    <link href="http://www.zotero.org/styles/apa" rel="self"/>
    <link href="http://www.zotero.org/styles/apa-6th-edition" rel="template"/>
    <link href="https://apastyle.apa.org/style-grammar-guidelines/references/examples" rel="documentation"/>
    <author>
      <name>Brenton M. Wiernik</name>
      <email>zotero@wiernik.org</email>
    </author>
    <category citation-format="author-date"/>
    <category field="psychology"/>
    <category field="generic-base"/>
    <updated>2023-07-16T22:56:49+00:00</updated>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
  </info>
  <locale xml:lang="en">
    <terms>
      <term name="editortranslator" form="short">
        <single>ed. &amp; trans.</single>
        <multiple>eds. &amp; trans.</multiple>
      </term>
      <term name="translator" form="short">trans.</term>
      <term name="interviewer" form="short">
        <single>interviewer</single>
        <multiple>interviewers</multiple>
      </term>
      <term name="collection-editor" form="short">
        <single>ed.</single>
        <multiple>eds.</multiple>
      </term>
      <term name="circa" form="short">ca.</term>
      <term name="bc"> B.C.E.</term>
      <term name="ad"> C.E.</term>
      <term name="issue" form="long">
        <single>issue</single>
        <multiple>issues</multiple>
      </term>
      <term name="software">computer software</term>
    </terms>
  </locale>
  <locale xml:lang="da">
    <terms>
      <term name="et-al">et al.</term>
    </terms>
  </locale>
  <locale xml:lang="de">
    <terms>
      <term name="et-al">et al.</term>
    </terms>
  </locale>
  <locale xml:lang="es">
    <terms>
      <term name="from">de</term>
    </terms>
  </locale>
  <locale xml:lang="fr">
    <terms>
      <term name="editor" form="short">
        <single>éd.</single>
        <multiple>éds.</multiple>
      </term>
    </terms>
  </locale>
  <locale xml:lang="nb">
    <terms>
      <term name="et-al">et al.</term>
    </terms>
  </locale>
  <locale xml:lang="nl">
    <terms>
      <term name="et-al">et al.</term>
    </terms>
  </locale>
  <locale xml:lang="nn">
    <terms>
      <term name="et-al">et al.</term>
    </terms>
  </locale>
  <!-- TODO: New types: classic collection document event hearing performance periodical regulation -software- standard -->
  <!-- TODO: New creator roles: chair compiler contributor curator executive-producer guest host narrator organizer performer producer script-writer series-creator -->
  <!-- TODO: New variables:
         available-date submitted
         part-number printing-number supplement-number
         part-title volume-title
         archive_collection
         division jurisdiction
         event-title
         language
         license
         reviewed-genre
  -->
  <!-- TODO: New terms:
         advance-online-publication
         album on audio-recording
         original-work-published
         personal-communication
         preprint
         review-of
         item types
  -->
  <!-- TODO: Check Indigeneous Knowledge format -->
  <!-- General categories of item types:
       Periodical: article-journal article-magazine article-newspaper post-weblog review review-book
       Periodical or Booklike: paper-conference
       Booklike: article book broadcast chapter classic collection dataset document
                 entry entry-dictionary entry-encyclopedia event figure
                 graphic interview manuscript map motion_picture musical_score pamphlet patent
                 performance periodical personal_communication post report
                 software song speech standard thesis webpage
       Legal: bill hearing legal_case legislation regulation treaty
  -->
  <!-- APA references contain four parts: author, date, title, source -->
  <macro name="author-bib">
    <!-- TODO: New creator roles (media, contributor) -->
    <!-- TODO: Add new item types -->
    <names variable="composer" delimiter=", ">
      <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
      <substitute>
        <names variable="author"/>
        <names variable="illustrator"/>
        <names variable="director">
          <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
          <label form="long" prefix=" (" suffix=")" text-case="title"/>
        </names>
        <choose>
          <if variable="container-title">
            <choose>
              <if type="book entry entry-dictionary entry-encyclopedia" match="any">
                <choose>
                  <if variable="title">
                    <group delimiter=" ">
                      <text macro="title"/>
                      <text macro="parenthetical"/>
                    </group>
                  </if>
                  <else>
                    <text macro="title-and-descriptions"/>
                  </else>
                </choose>
              </if>
            </choose>
          </if>
        </choose>
        <!-- TODO: Test for editortranslator and put that first as that becomes available -->
        <names variable="editor" delimiter=", ">
          <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
          <label form="short" prefix=" (" suffix=")" text-case="title"/>
        </names>
        <names variable="editorial-director">
          <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
          <label form="short" prefix=" (" suffix=")" text-case="title"/>
        </names>
        <names variable="collection-editor">
          <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
          <label form="short" prefix=" (" suffix=")" text-case="title"/>
        </names>
        <choose>
          <if variable="title">
            <group delimiter=" ">
              <text macro="title"/>
              <text macro="parenthetical"/>
            </group>
          </if>
          <else>
            <text macro="title-and-descriptions"/>
          </else>
        </choose>
      </substitute>
    </names>
  </macro>
  <macro name="author-intext">
    <!-- TODO: New creator roles -->
    <!-- TODO: Add new item types -->
    <choose>
      <if type="bill legal_case legislation treaty" match="any">
        <text macro="title-intext"/>
      </if>
      <else-if type="interview personal_communication" match="any">
        <choose>
          <!-- These variables indicate that the letter is retrievable by the reader.
                If not, then use the APA in-text-only personal communication format -->
          <if variable="archive container-title DOI publisher URL" match="none">
            <group delimiter=", ">
              <names variable="author">
                <name and="symbol" delimiter=", " initialize-with=". "/>
                <substitute>
                  <text macro="title-intext"/>
                </substitute>
              </names>
              <text term="personal-communication"/>
            </group>
          </if>
          <else>
            <names variable="author" delimiter=", ">
              <name form="short" and="symbol" delimiter=", " initialize-with=". "/>
              <substitute>
                <text macro="title-intext"/>
              </substitute>
            </names>
          </else>
        </choose>
      </else-if>
      <else>
        <names variable="composer" delimiter=", ">
          <name form="short" and="symbol" delimiter=", " initialize-with=". "/>
          <substitute>
            <names variable="author"/>
            <names variable="illustrator"/>
            <names variable="director"/>
            <choose>
              <if variable="container-title">
                <choose>
                  <if type="book entry entry-dictionary entry-encyclopedia" match="any">
                    <text macro="title-intext"/>
                  </if>
                </choose>
              </if>
            </choose>
            <names variable="editor"/>
            <names variable="editorial-director"/>
            <text macro="title-intext"/>
          </substitute>
        </names>
      </else>
    </choose>
  </macro>
  <macro name="date-bib">
    <!-- TODO: Add new item types -->
    <group delimiter=" " prefix="(" suffix=")">
      <choose>
        <if is-uncertain-date="issued">
          <text term="circa" form="short"/>
        </if>
      </choose>
      <group>
        <choose>
          <if variable="issued">
            <date variable="issued">
              <date-part name="year"/>
            </date>
            <text variable="year-suffix"/>
            <choose>
              <if type="article-magazine article-newspaper broadcast interview motion_picture pamphlet personal_communication post post-weblog song speech webpage" match="any">
                <!-- Many video and audio examples in manual give full dates. Err on the side of too much information. -->
                <date variable="issued">
                  <date-part prefix=", " name="month"/>
                  <date-part prefix=" " name="day"/>
                </date>
              </if>
              <else-if type="paper-conference">
                <!-- Capture 'speech' stored as 'paper-conference' -->
                <choose>
                  <if variable="collection-editor editor editorial-director issue page volume" match="none">
                    <date variable="issued">
                      <date-part prefix=", " name="month"/>
                      <date-part prefix=" " name="day"/>
                    </date>
                  </if>
                </choose>
              </else-if>
              <!-- Only year: article article-journal book chapter entry entry-dictionary entry-encyclopedia dataset figure graphic
                   manuscript map musical_score paper-conference[published] patent report review review-book thesis -->
            </choose>
          </if>
          <else-if variable="status">
            <group>
              <!-- TODO: Should I print status as-is, or should I print the in-press term? -->
              <text variable="status" text-case="lowercase"/>
              <text variable="year-suffix" prefix="-"/>
            </group>
          </else-if>
          <else>
            <text term="no date" form="short"/>
            <text variable="year-suffix" prefix="-"/>
          </else>
        </choose>
      </group>
    </group>
  </macro>
  <macro name="date-sort-group">
    <!-- APA sorts 1. no-date items, 2. items with dates, 3. in-press (status) items -->
    <choose>
      <if variable="issued">
        <text value="1"/>
      </if>
      <else-if variable="status">
        <text value="2"/>
      </else-if>
      <else>
        <text value="0"/>
      </else>
    </choose>
  </macro>
  <macro name="date-intext">
    <!-- TODO: Add new item types -->
    <choose>
      <if variable="issued">
        <group delimiter="/">
          <group delimiter=" ">
            <choose>
              <if is-uncertain-date="original-date">
                <text term="circa" form="short"/>
              </if>
            </choose>
            <date variable="original-date">
              <date-part name="year"/>
            </date>
          </group>
          <group delimiter=" ">
            <choose>
              <if is-uncertain-date="issued">
                <text term="circa" form="short"/>
              </if>
            </choose>
            <group>
              <choose>
                <if type="interview personal_communication" match="any">
                  <choose>
                    <if variable="archive container-title DOI publisher URL" match="none">
                      <!-- These variables indicate that the communication is retrievable by the reader.
                           If not, then use the in-text-only personal communication format -->
                      <date variable="issued" form="text"/>
                    </if>
                    <else>
                      <date variable="issued">
                        <date-part name="year"/>
                      </date>
                    </else>
                  </choose>
                </if>
                <else>
                  <date variable="issued">
                    <date-part name="year"/>
                  </date>
                </else>
              </choose>
              <text variable="year-suffix"/>
            </group>
          </group>
        </group>
      </if>
      <else-if variable="status">
        <!-- TODO: Should I print status as-is, or should I print the in-press term? -->
        <text variable="status" text-case="lowercase"/>
        <text variable="year-suffix" prefix="-"/>
      </else-if>
      <else>
        <text term="no date" form="short"/>
        <text variable="year-suffix" prefix="-"/>
      </else>
    </choose>
  </macro>
  <!-- APA has two description elements following the title:
       title (parenthetical) [bracketed]  -->
  <macro name="title-and-descriptions">
    <choose>
      <if variable="title">
        <group delimiter=" ">
          <text macro="title"/>
          <text macro="parenthetical"/>
          <text macro="bracketed"/>
        </group>
      </if>
      <else>
        <group delimiter=" ">
          <text macro="bracketed"/>
          <text macro="parenthetical"/>
        </group>
      </else>
    </choose>
  </macro>
  <macro name="title">
    <!-- TODO: Add new item types -->
    <choose>
      <if type="post webpage" match="any">
        <!-- Webpages are always italicized -->
        <text variable="title" font-style="italic"/>
      </if>
      <else-if variable="container-title" match="any">
        <!-- Other types are italicized based on presence of container-title.
             Assume that review and review-book are published in periodicals/blogs,
             not just on a web page (ex. 69) -->
        <text variable="title"/>
      </else-if>
      <else>
        <choose>
          <if type="article-journal article-magazine article-newspaper post-weblog review review-book" match="any">
            <text variable="title" font-style="italic"/>
          </if>
          <else-if type="paper-conference">
            <choose>
              <if variable="collection-editor editor editorial-director" match="any">
                <group delimiter=": " font-style="italic">
                  <text variable="title"/>
                  <!-- TODO: Replace with volume-title -->
                  <choose>
                    <if is-numeric="volume" match="none">
                      <group delimiter=" ">
                        <label variable="volume" form="short" text-case="capitalize-first"/>
                        <text variable="volume"/>
                      </group>
                    </if>
                  </choose>
                </group>
              </if>
              <else>
                <text variable="title" font-style="italic"/>
              </else>
            </choose>
          </else-if>
          <else>
            <group delimiter=": " font-style="italic">
              <text variable="title"/>
              <!-- TODO: Replace with volume-title -->
              <choose>
                <if is-numeric="volume" match="none">
                  <group delimiter=" ">
                    <label variable="volume" form="short" text-case="capitalize-first"/>
                    <text variable="volume"/>
                  </group>
                </if>
              </choose>
            </group>
          </else>
        </choose>
      </else>
    </choose>
  </macro>
  <macro name="title-intext">
    <!-- TODO: Add new item types -->
    <choose>
      <if variable="title" match="none">
        <text macro="bracketed-intext" prefix="[" suffix="]"/>
      </if>
      <else-if type="hearing">
        <!-- Hearings are italicized -->
        <text variable="title" form="short" font-style="italic" text-case="title"/>
      </else-if>
      <else-if type="bill">
        <!-- Bills are not italicized and substitute bill number if no title. -->
        <choose>
          <if variable="title">
            <text variable="title" form="short" text-case="title"/>
          </if>
          <else>
            <group delimiter=" ">
              <text variable="genre"/>
              <group delimiter=" ">
                <choose>
                  <if variable="chapter-number container-title" match="none">
                    <label variable="number" form="short"/>
                  </if>
                </choose>
                <text variable="number"/>
              </group>
            </group>
          </else>
        </choose>
      </else-if>
      <else-if type="legal_case" match="any">
        <!-- Cases are italicized -->
        <text variable="title" font-style="italic"/>
      </else-if>
      <else-if type="legislation treaty" match="any">
        <!-- Legislation and treaties not italicized or quoted -->
        <text variable="title" form="short" text-case="title"/>
      </else-if>
      <else-if type="post webpage" match="any">
        <!-- Webpages are always italicized -->
        <text variable="title" form="short" font-style="italic" text-case="title"/>
      </else-if>
      <else-if variable="container-title" match="any">
        <!-- Other types are italicized or quoted based on presence of container-title. As in title macro. -->
        <text variable="title" form="short" quotes="true" text-case="title"/>
      </else-if>
      <else>
        <text variable="title" form="short" font-style="italic" text-case="title"/>
      </else>
    </choose>
  </macro>
  <macro name="parenthetical">
    <!-- TODO: Add new item types -->
    <!-- (Secondary contributors; Database location; Genre no. 123; Report Series 123, Version, Edition, Volume, Page) -->
    <group prefix="(" suffix=")">
      <choose>
        <if type="patent">
          <!-- authority: U.S. ; genre: patent ; number: 123,445 -->
          <group delimiter=" ">
            <text variable="authority" form="short"/>
            <choose>
              <if variable="genre">
                <text variable="genre" text-case="capitalize-first"/>
              </if>
              <else>
                <text term="patent" text-case="capitalize-first"/>
              </else>
            </choose>
            <group delimiter=" ">
              <label variable="number" form="short" text-case="capitalize-first"/>
              <text variable="number"/>
            </group>
          </group>
        </if>
        <else-if type="post webpage" match="any">
          <!-- For post webpage, container-title is treated as publisher -->
          <group delimiter="; ">
            <text macro="secondary-contributors"/>
            <text macro="database-location"/>
            <text macro="number"/>
            <text macro="locators-booklike"/>
          </group>
        </else-if>
        <else-if variable="container-title">
          <group delimiter="; ">
            <text macro="secondary-contributors"/>
            <choose>
              <if type="broadcast graphic map motion_picture song" match="any">
                <!-- For audiovisual media, number information comes after title, not container-title -->
                <text macro="number"/>
              </if>
            </choose>
          </group>
        </else-if>
        <else>
          <group delimiter="; ">
            <text macro="secondary-contributors"/>
            <text macro="database-location"/>
            <text macro="number"/>
            <text macro="locators-booklike"/>
          </group>
        </else>
      </choose>
    </group>
  </macro>
  <macro name="parenthetical-container">
    <!-- TODO: Add new item types -->
    <choose>
      <if variable="container-title" match="any">
        <group prefix="(" suffix=")">
          <group delimiter="; ">
            <text macro="database-location"/>
            <choose>
              <if type="broadcast graphic map motion_picture song" match="none">
                <!-- For audiovisual media, number information comes after title, not container-title -->
                <text macro="number"/>
              </if>
            </choose>
            <text macro="locators-booklike"/>
          </group>
        </group>
      </if>
    </choose>
  </macro>
  <macro name="bracketed">
    <!-- TODO: Add new item types -->
    <!-- [Descriptive information] -->
    <!-- If there is a number, genre is already printed in macro="number" -->
    <group prefix="[" suffix="]">
      <choose>
        <if variable="reviewed-author reviewed-title" type="review review-book" match="any">
          <!-- Reviewed item -->
          <group delimiter="; ">
            <group delimiter=", ">
              <group delimiter=" ">
                <!-- Assume that genre is entered as 'Review of the book' or similar -->
                <choose>
                  <if variable="number" match="none">
                    <choose>
                      <if variable="genre">
                        <text variable="genre" text-case="capitalize-first"/>
                      </if>
                      <else-if variable="medium">
                        <text variable="medium" text-case="capitalize-first"/>
                      </else-if>
                      <else>
                        <!-- TODO: Replace with term="review" -->
                        <!-- TODO: Handle review vs review-of depending on presence of reviewed-title -->
                        <!-- TODO: Add reviewed-genre -->
                        <text value="Review of"/>
                      </else>
                    </choose>
                  </if>
                  <else>
                    <choose>
                      <if variable="medium">
                        <text variable="medium" text-case="capitalize-first"/>
                      </if>
                      <else>
                        <!-- TODO: Replace with term="review" -->
                        <!-- TODO: Handle review vs review-of depending on presence of reviewed-title -->
                        <!-- TODO: Add reviewed-genre -->
                        <text value="Review of"/>
                      </else>
                    </choose>
                  </else>
                </choose>
                <text macro="reviewed-title"/>
              </group>
              <names variable="reviewed-author">
                <label form="verb-short" suffix=" "/>
                <name and="symbol" initialize-with=". " delimiter=", "/>
              </names>
            </group>
            <choose>
              <if variable="genre" match="any">
                <choose>
                  <if variable="number" match="none">
                    <text variable="medium" text-case="capitalize-first"/>
                  </if>
                </choose>
              </if>
            </choose>
          </group>
        </if>
        <else-if type="thesis">
          <!-- Thesis type and institution -->
          <group delimiter="; ">
            <choose>
              <if variable="number" match="none">
                <group delimiter=", ">
                  <text variable="genre" text-case="capitalize-first"/>
                  <choose>
                    <if variable="archive DOI URL" match="any">
                      <!-- Include the university in brackets if thesis is published -->
                      <text variable="publisher"/>
                    </if>
                  </choose>
                </group>
              </if>
            </choose>
            <text variable="medium" text-case="capitalize-first"/>
          </group>
        </else-if>
        <else-if variable="interviewer" type="interview" match="any">
          <!-- Interview information -->
          <choose>
            <if variable="title">
              <text macro="format"/>
            </if>
            <else-if variable="genre">
              <group delimiter="; ">
                <group delimiter=" ">
                  <text variable="genre" text-case="capitalize-first"/>
                  <group delimiter=" ">
                    <text term="author" form="verb"/>
                    <names variable="interviewer">
                      <name and="symbol" initialize-with=". " delimiter=", "/>
                    </names>
                  </group>
                </group>
              </group>
            </else-if>
            <else-if variable="interviewer">
              <group delimiter="; ">
                <names variable="interviewer">
                  <label form="verb" suffix=" " text-case="capitalize-first"/>
                  <name and="symbol" initialize-with=". " delimiter=", "/>
                </names>
                <text variable="medium" text-case="capitalize-first"/>
              </group>
            </else-if>
            <else>
              <text macro="format"/>
            </else>
          </choose>
        </else-if>
        <else-if type="personal_communication">
          <!-- Letter information -->
          <choose>
            <if variable="recipient">
              <group delimiter="; ">
                <group delimiter=" ">
                  <choose>
                    <if variable="number" match="none">
                      <choose>
                        <if variable="genre">
                          <text variable="genre" text-case="capitalize-first"/>
                        </if>
                        <else-if variable="medium">
                          <text variable="medium" text-case="capitalize-first"/>
                        </else-if>
                        <else>
                          <text term="letter" text-case="capitalize-first"/>
                        </else>
                      </choose>
                    </if>
                    <else>
                      <choose>
                        <if variable="medium">
                          <text variable="medium" text-case="capitalize-first"/>
                        </if>
                        <else>
                          <text term="letter" text-case="capitalize-first"/>
                        </else>
                      </choose>
                    </else>
                  </choose>
                  <names variable="recipient" delimiter=", ">
                    <label form="verb" suffix=" "/>
                    <name and="symbol" delimiter=", "/>
                  </names>
                </group>
                <choose>
                  <if variable="genre" match="any">
                    <choose>
                      <if variable="number" match="none">
                        <text variable="medium" text-case="capitalize-first"/>
                      </if>
                    </choose>
                  </if>
                </choose>
              </group>
            </if>
            <else>
              <text macro="format"/>
            </else>
          </choose>
        </else-if>
        <else-if variable="composer" type="song" match="all">
          <!-- Performer of classical music works -->
          <group delimiter="; ">
            <choose>
              <if variable="number" match="none">
                <group delimiter=" ">
                  <choose>
                    <if variable="genre">
                      <text variable="genre" text-case="capitalize-first"/>
                      <!-- TODO: Replace prefix with performer label -->
                      <names variable="author" prefix="recorded by ">
                        <name and="symbol" initialize-with=". " delimiter=", "/>
                      </names>
                    </if>
                    <else-if variable="medium">
                      <text variable="medium" text-case="capitalize-first"/>
                      <!-- TODO: Replace prefix with performer label -->
                      <names variable="author" prefix="recorded by ">
                        <name and="symbol" initialize-with=". " delimiter=", "/>
                      </names>
                    </else-if>
                    <else>
                      <!-- TODO: Replace prefix with performer label -->
                      <names variable="author" prefix="Recorded by ">
                        <name and="symbol" initialize-with=". " delimiter=", "/>
                      </names>
                    </else>
                  </choose>
                </group>
              </if>
              <else>
                <group delimiter=" ">
                  <choose>
                    <if variable="medium">
                      <text variable="medium" text-case="capitalize-first"/>
                      <!-- TODO: Replace prefix with performer label -->
                      <names variable="author" prefix="recorded by ">
                        <name and="symbol" initialize-with=". " delimiter=", "/>
                      </names>
                    </if>
                    <else>
                      <!-- TODO: Replace prefix with performer label -->
                      <names variable="author" prefix="Recorded by ">
                        <name and="symbol" initialize-with=". " delimiter=", "/>
                      </names>
                    </else>
                  </choose>
                </group>
              </else>
            </choose>
            <choose>
              <if variable="genre" match="any">
                <choose>
                  <if variable="number" match="none">
                    <text variable="medium" text-case="capitalize-first"/>
                  </if>
                </choose>
              </if>
            </choose>
          </group>
        </else-if>
        <else-if variable="container-title" match="none">
          <!-- Other description -->
          <text macro="format"/>
        </else-if>
        <else>
          <!-- For conference presentations, chapters in reports, software, place bracketed after the container title -->
          <choose>
            <if type="paper-conference speech" match="any">
              <choose>
                <if variable="collection-editor editor editorial-director issue page volume" match="any">
                  <text macro="format"/>
                </if>
              </choose>
            </if>
            <else-if type="report software" match="none">
              <text macro="format"/>
            </else-if>
          </choose>
        </else>
      </choose>
    </group>
  </macro>
  <macro name="bracketed-intext">
    <!-- TODO: Add new item types -->
    <group prefix="[" suffix="]">
      <choose>
        <if variable="reviewed-author reviewed-title" type="review review-book" match="any">
          <group delimiter=" ">
            <text term="review-of" text-case="capitalize-first"/>
            <text macro="reviewed-title-intext"/>
          </group>
        </if>
        <else-if variable="interviewer" type="interview" match="any">
          <names variable="interviewer">
            <label form="verb" suffix=" " text-case="capitalize-first"/>
            <name and="symbol" initialize-with=". " delimiter=", "/>
            <substitute>
              <text macro="format-intext"/>
            </substitute>
          </names>
        </else-if>
        <else-if type="personal_communication">
          <!-- Letter information -->
          <choose>
            <if variable="recipient">
              <group delimiter=" ">
                <choose>
                  <if variable="number" match="none">
                    <text variable="genre" text-case="capitalize-first"/>
                  </if>
                  <else>
                    <text term="letter" text-case="capitalize-first"/>
                  </else>
                </choose>
                <names variable="recipient" delimiter=", ">
                  <label form="verb" suffix=" "/>
                  <name and="symbol" delimiter=", "/>
                </names>
              </group>
            </if>
            <else>
              <text macro="format-intext"/>
            </else>
          </choose>
        </else-if>
        <else>
          <text macro="format-intext"/>
        </else>
      </choose>
    </group>
  </macro>
  <macro name="bracketed-container">
    <!-- TODO: Add new item types -->
    <group prefix="[" suffix="]">
      <choose>
        <if type="paper-conference speech" match="any">
          <!-- Conference presentations should describe the session [container] in bracketed unless published in a proceedings -->
          <choose>
            <if variable="collection-editor editor editorial-director issue page volume" match="none">
              <text macro="format"/>
            </if>
          </choose>
        </if>
        <else-if type="software" match="all">
          <!-- For entries in mobile app reference works, place bracketed after the container-title -->
          <text macro="format"/>
        </else-if>
        <else-if type="report">
          <!-- For chapters in reports, place bracketed after the container title -->
          <text macro="format"/>
        </else-if>
      </choose>
    </group>
  </macro>
  <macro name="secondary-contributors">
    <!-- TODO: Add new item types -->
    <!-- TODO: Add new creator roles -->
    <choose>
      <if type="article-journal article-magazine article-newspaper post-weblog review review-book" match="any">
        <text macro="secondary-contributors-periodical"/>
      </if>
      <else-if type="paper-conference">
        <choose>
          <if variable="collection-editor editor editorial-director" match="any">
            <text macro="secondary-contributors-booklike"/>
          </if>
          <else>
            <text macro="secondary-contributors-periodical"/>
          </else>
        </choose>
      </else-if>
      <else>
        <text macro="secondary-contributors-booklike"/>
      </else>
    </choose>
  </macro>
  <macro name="secondary-contributors-periodical">
    <group delimiter="; ">
      <choose>
        <if variable="title">
          <names variable="interviewer" delimiter="; ">
            <name and="symbol" initialize-with=". " delimiter=", "/>
            <label form="short" prefix=", " text-case="title"/>
          </names>
        </if>
      </choose>
      <names variable="translator" delimiter="; ">
        <name and="symbol" initialize-with=". " delimiter=", "/>
        <label form="short" prefix=", " text-case="title"/>
      </names>
    </group>
  </macro>
  <macro name="secondary-contributors-booklike">
    <!-- TODO: Add new item types -->
    <group delimiter="; ">
      <choose>
        <if variable="title">
          <names variable="interviewer">
            <name and="symbol" initialize-with=". " delimiter=", "/>
            <label form="short" prefix=", " text-case="title"/>
          </names>
        </if>
      </choose>
      <!-- TODO: When editortranslator becomes available, add a test: variable="editortranslator" match="none"; then print translator -->
      <choose>
        <if type="post webpage" match="none">
          <!-- Webpages treat container-title like publisher -->
          <choose>
            <if variable="container-title" match="none">
              <group delimiter="; ">
                <names variable="container-author">
                  <label form="verb-short" suffix=" " text-case="title"/>
                  <name and="symbol" initialize-with=". " delimiter=", "/>
                </names>
                <names variable="editor translator" delimiter="; ">
                  <name and="symbol" initialize-with=". " delimiter=", "/>
                  <label form="short" prefix=", " text-case="title"/>
                </names>
              </group>
            </if>
          </choose>
        </if>
        <else>
          <group delimiter="; ">
            <names variable="container-author">
              <label form="verb-short" suffix=" " text-case="title"/>
              <name and="symbol" initialize-with=". " delimiter=", "/>
            </names>
            <names variable="editor translator" delimiter="; ">
              <name and="symbol" initialize-with=". " delimiter=", "/>
              <label form="short" prefix=", " text-case="title"/>
            </names>
          </group>
        </else>
      </choose>
    </group>
  </macro>
  <macro name="database-location">
    <choose>
      <if variable="archive-place" match="none">
        <!-- With 'archive-place': physical archives. Without: online archives. -->
        <!-- TODO: Add archive_collection -->
        <text variable="archive_location"/>
      </if>
    </choose>
  </macro>
  <macro name="number">
    <!-- TODO: Add new item types -->
    <choose>
      <if variable="number">
        <group delimiter=", ">
          <group delimiter=" ">
            <text variable="genre" text-case="title"/>
            <choose>
              <if is-numeric="number">
                <label variable="number" form="short" text-case="capitalize-first"/>
                <text variable="number"/>
              </if>
              <else>
                <text variable="number"/>
              </else>
            </choose>
          </group>
          <choose>
            <if type="thesis">
              <choose>
                <!-- Include the university in brackets if thesis is published -->
                <if variable="archive DOI URL" match="any">
                  <text variable="publisher"/>
                </if>
              </choose>
            </if>
          </choose>
        </group>
      </if>
    </choose>
  </macro>
  <macro name="locators-booklike">
    <!-- TODO: Add new item types -->
    <choose>
      <if type="article-journal article-magazine article-newspaper broadcast interview patent post post-weblog review review-book speech webpage" match="any"/>
      <else-if type="paper-conference">
        <choose>
          <if variable="collection-editor editor editorial-director" match="any">
            <group delimiter=", ">
              <text macro="version"/>
              <text macro="edition"/>
              <text macro="volume-booklike"/>
            </group>
          </if>
        </choose>
      </else-if>
      <else>
        <group delimiter=", ">
          <text macro="version"/>
          <text macro="edition"/>
          <text macro="volume-booklike"/>
        </group>
      </else>
    </choose>
  </macro>
  <macro name="version">
    <choose>
      <if is-numeric="version">
        <group delimiter=" ">
          <label variable="version" text-case="capitalize-first"/>
          <text variable="version"/>
        </group>
      </if>
      <else>
        <text variable="version"/>
      </else>
    </choose>
  </macro>
  <macro name="edition">
    <choose>
      <if is-numeric="edition">
        <group delimiter=" ">
          <number variable="edition" form="ordinal"/>
          <label variable="edition" form="short"/>
        </group>
      </if>
      <else>
        <text variable="edition"/>
      </else>
    </choose>
  </macro>
  <macro name="volume-booklike">
    <!-- TODO: Add new item types -->
    <group delimiter=", ">
      <!-- Report series [ex. 52] -->
      <choose>
        <if type="report">
          <group delimiter=" ">
            <text variable="collection-title" text-case="title"/>
            <text variable="collection-number"/>
          </group>
        </if>
      </choose>
      <choose>
        <if variable="volume" match="any">
          <!-- TODO: Update using volume-title -->
          <choose>
            <!-- Non-numeric volumes are already printed as part of the book title -->
            <if is-numeric="volume" match="none"/>
            <else>
              <group delimiter=" ">
                <label variable="volume" form="short" text-case="capitalize-first"/>
                <number variable="volume" form="numeric"/>
              </group>
            </else>
          </choose>
        </if>
        <else>
          <group>
            <label variable="number-of-volumes" form="short" text-case="capitalize-first" suffix=" "/>
            <text term="page-range-delimiter" prefix="1"/>
            <number variable="number-of-volumes" form="numeric"/>
          </group>
        </else>
      </choose>
      <group delimiter=" ">
        <label variable="issue" text-case="capitalize-first"/>
        <text variable="issue"/>
      </group>
      <group delimiter=" ">
        <label variable="page" form="short" suffix=" "/>
        <text variable="page"/>
      </group>
    </group>
  </macro>
  <macro name="reviewed-title">
    <choose>
      <if variable="reviewed-title">
        <!-- Not possible to distinguish TV series episode from other reviewed
              works [Ex. 69] -->
        <text variable="reviewed-title" font-style="italic"/>
      </if>
      <else>
        <!-- Assume title is title of reviewed work -->
        <text variable="title" font-style="italic"/>
      </else>
    </choose>
  </macro>
  <macro name="reviewed-title-intext">
    <choose>
      <if variable="reviewed-title">
        <!-- Not possible to distinguish TV series episode from other reviewed works [Ex. 69] -->
        <text variable="reviewed-title" form="short" font-style="italic" text-case="title"/>
      </if>
      <else>
        <!-- Assume title is title of reviewed work -->
        <text variable="title" form="short" font-style="italic" text-case="title"/>
      </else>
    </choose>
  </macro>
  <macro name="format">
    <!-- TODO: Add new item types -->
    <choose>
      <if variable="genre medium" match="any">
        <group delimiter="; ">
          <choose>
            <if variable="number" match="none">
              <text variable="genre" text-case="capitalize-first"/>
            </if>
          </choose>
          <text variable="medium" text-case="capitalize-first"/>
        </group>
      </if>
      <!-- Generic labels for specific types -->
      <!-- TODO: Add terms for other types? -->
      <else-if type="dataset">
        <text term="dataset"/>
      </else-if>
      <else-if type="software">
        <text term="software" text-case="capitalize-first"/>
      </else-if>
      <else-if type="interview personal_communication" match="any">
        <choose>
          <if variable="archive container-title DOI publisher URL" match="none">
            <text term="personal-communication" text-case="capitalize-first"/>
          </if>
          <else-if type="interview">
            <text term="interview" text-case="capitalize-first"/>
          </else-if>
        </choose>
      </else-if>
      <else-if type="map">
        <text term="map" text-case="capitalize-first"/>
      </else-if>
    </choose>
  </macro>
  <macro name="format-intext">
    <!-- TODO: Add new item types -->
    <choose>
      <if variable="genre" match="any">
        <text variable="genre" text-case="capitalize-first"/>
      </if>
      <else-if variable="medium">
        <text variable="medium" text-case="capitalize-first"/>
      </else-if>
      <!-- Generic labels for specific types -->
      <!-- TODO: Add terms for other types? -->
      <else-if type="dataset">
        <text term="dataset"/>
      </else-if>
      <else-if type="software">
        <text term="software" text-case="capitalize-first"/>
      </else-if>
      <else-if type="interview personal_communication" match="any">
        <choose>
          <if variable="archive container-title DOI publisher URL" match="none">
            <text term="personal-communication" text-case="capitalize-first"/>
          </if>
          <else-if type="interview">
            <text term="interview" text-case="capitalize-first"/>
          </else-if>
        </choose>
      </else-if>
      <else-if type="map">
        <text term="map"/>
      </else-if>
    </choose>
  </macro>
  <!-- APA 'source' element contains four parts:
       container, event, publisher, access -->
  <macro name="container">
    <!-- TODO: Add new item types -->
    <choose>
      <if type="article-journal article-magazine article-newspaper post-weblog review review-book" match="any">
        <!-- Periodical items -->
        <text macro="container-periodical"/>
      </if>
      <else-if type="paper-conference">
        <!-- Determine if paper-conference is a periodical or booklike -->
        <choose>
          <if variable="editor editorial-director collection-editor container-author" match="any">
            <text macro="container-booklike"/>
          </if>
          <else>
            <text macro="container-periodical"/>
          </else>
        </choose>
      </else-if>
      <else-if type="post webpage" match="none">
        <!-- post and webpage treat container-title like publisher -->
        <text macro="container-booklike"/>
      </else-if>
    </choose>
  </macro>
  <macro name="container-periodical">
    <group delimiter=". ">
      <group delimiter=", ">
        <text variable="container-title" font-style="italic" text-case="title"/>
        <choose>
          <if variable="volume">
            <group>
              <text variable="volume" font-style="italic"/>
              <text variable="issue" prefix="(" suffix=")"/>
            </group>
          </if>
          <else>
            <text variable="issue" font-style="italic"/>
          </else>
        </choose>
        <choose>
          <if variable="number">
            <!-- Ex. 6: Journal article with article number or eLocator -->
            <!-- This should be localized -->
            <group delimiter=" ">
              <text term="article-locator" text-case="capitalize-first"/>
              <text variable="number"/>
            </group>
          </if>
          <else>
            <text variable="page"/>
          </else>
        </choose>
      </group>
      <choose>
        <if variable="issued">
          <choose>
            <if variable="issue page volume" match="none">
              <!-- TODO: Should I print status as-is, or should I print the in-press term? -->
              <text variable="status" text-case="capitalize-first"/>
            </if>
          </choose>
        </if>
      </choose>
    </group>
  </macro>
  <macro name="container-booklike">
    <!-- TODO: Add new item types -->
    <choose>
      <if variable="container-title" match="any">
        <group delimiter=" ">
          <text term="in" text-case="capitalize-first"/>
          <group delimiter=", ">
            <names variable="editor translator" delimiter=", &amp; ">
              <!-- TODO: Change to editortranslator and move editor to substitute -->
              <name and="symbol" initialize-with=". " delimiter=", "/>
              <label form="short" text-case="title" prefix=" (" suffix=")"/>
              <substitute>
                <names variable="editorial-director"/>
                <names variable="collection-editor"/>
                <names variable="container-author"/>
              </substitute>
            </names>
            <group delimiter=": " font-style="italic">
              <text variable="container-title"/>
              <!-- TODO: Replace with volume-title -->
              <choose>
                <if is-numeric="volume" match="none">
                  <group delimiter=" ">
                    <label variable="volume" form="short" text-case="capitalize-first"/>
                    <text variable="volume"/>
                  </group>
                </if>
              </choose>
            </group>
          </group>
          <text macro="parenthetical-container"/>
          <text macro="bracketed-container"/>
        </group>
      </if>
    </choose>
  </macro>
  <macro name="publisher">
    <!-- TODO: Add new item types -->
    <group delimiter="; ">
      <choose>
        <if type="thesis">
          <choose>
            <if variable="archive DOI URL" match="none">
              <text variable="publisher"/>
            </if>
          </choose>
        </if>
        <else-if type="post webpage" match="any">
          <!-- For websites, treat container title like publisher -->
          <group delimiter="; ">
            <text variable="container-title" text-case="title"/>
            <text variable="publisher"/>
          </group>
        </else-if>
        <else-if type="paper-conference">
          <!-- For paper-conference, don't print publisher if in a journal-like proceedings -->
          <choose>
            <if variable="collection-editor editor editorial-director" match="any">
              <text variable="publisher"/>
            </if>
          </choose>
        </else-if>
        <else-if type="article-journal article-magazine article-newspaper post-weblog" match="none">
          <text variable="publisher"/>
        </else-if>
      </choose>
      <group delimiter=", ">
        <choose>
          <if variable="archive-place">
            <!-- With 'archive-place': physical archives. Without: online archives. -->
            <!-- For physical archives, print the location before the archive name.
                For electronic archives, these are printed in macro="description". -->
            <!-- TODO: Split "archive_location" into "archive_collection" and "archive_location" -->
            <!-- Must test for archive_collection:
                With collection: archive_collection (archive_location), archive, archive-place
                No collection: archive (archive_location), archive-place
            -->
            <text variable="archive_location"/>
          </if>
        </choose>
        <text variable="archive"/>
        <text variable="archive-place"/>
      </group>
    </group>
  </macro>
  <macro name="access">
    <choose>
      <if variable="DOI" match="any">
        <text variable="DOI" prefix="https://doi.org/"/>
      </if>
      <else-if variable="URL">
        <group delimiter=" ">
          <choose>
            <if variable="issued status" match="none">
              <group delimiter=" ">
                <text term="retrieved" text-case="capitalize-first"/>
                <date variable="accessed" form="text" suffix=","/>
                <text term="from"/>
              </group>
            </if>
          </choose>
          <text variable="URL"/>
        </group>
      </else-if>
    </choose>
  </macro>
  <macro name="event">
    <!-- TODO: Add new item types (e.g., event, collection, performance) -->
    <choose>
      <if variable="event event-title" match="any">
        <!-- To prevent Zotero from printing event-place due to its double-mapping of all 'place' to
             both publisher-place and event-place. Remove this 'choose' when that is changed. -->
        <choose>
          <if variable="collection-editor editor editorial-director issue page volume" match="none">
            <!-- Don't print event info if published in a proceedings -->
            <group delimiter=", ">
              <text macro="event-title"/>
              <text variable="event-place"/>
            </group>
          </if>
        </choose>
      </if>
    </choose>
  </macro>
  <macro name="event-title">
    <choose>
      <!-- TODO: We expect "event-title" to be used,
           but processors and applications may not be updated yet.
           This macro ensures that either "event" or "event-title" can be accpeted.
           Remove if procesor logic and application adoption can handle this. -->
      <if variable="event-title">
        <text variable="event-title"/>
      </if>
      <else>
        <text variable="event"/>
      </else>
    </choose>
  </macro>
  <!-- After 'source', APA also prints publication history (original publication, reprint info, retraction info) -->
  <macro name="publication-history">
    <!-- TODO: Add new item types -->
    <choose>
      <if type="patent" match="none">
        <group prefix="(" suffix=")">
          <choose>
            <if variable="references">
              <!-- This provides the option for more elaborate description
                   of publication history, such as full "reprinted" references
                   (examples 11, 43, 44) or retracted references -->
              <text variable="references"/>
            </if>
            <else>
              <!-- TODO: Replace these with terms -->
              <group delimiter=" ">
                <text term="original-work-published" text-case="capitalize-first"/>
                <choose>
                  <if is-uncertain-date="original-date">
                    <text term="circa" form="short"/>
                  </if>
                </choose>
                <date variable="original-date">
                  <date-part name="year"/>
                </date>
              </group>
            </else>
          </choose>
        </group>
      </if>
      <else>
        <text variable="references" prefix="(" suffix=")"/>
      </else>
    </choose>
  </macro>
  <!-- Legal citations have their own rules -->
  <macro name="legal-cites">
    <!-- TODO: Add new item types -->
    <choose>
      <if type="treaty">
        <!-- APA generally defers to Bluebook for legal citations, but diverges without
             explanation for treaty items. The Bluebook format that was used in APA 6th
             ed. is used here. -->
        <group delimiter=", ">
          <text variable="title" text-case="title"/>
          <names variable="author">
            <name initialize-with="." form="short" delimiter="-"/>
          </names>
          <text macro="date-legal"/>
          <text macro="container-legal"/>
          <text macro="access"/>
        </group>
      </if>
      <else>
        <!-- For 'bill': currently designed to handle bills, resolutions, federal reports. -->
        <!-- For 'legislation': currently designed to handle statutes, codified regulations, executive orders. -->
        <group delimiter=". ">
          <group delimiter=", ">
            <choose>
              <if type="bill legal_case legislation" match="any">
                <text variable="title"/>
              </if>
              <else-if type="hearing">
                <text variable="title" font-style="italic"/>
              </else-if>
            </choose>
            <group delimiter=" ">
              <text macro="container-legal"/>
              <text macro="date-legal"/>
              <choose>
                <if type="hearing">
                  <names variable="author" prefix="(testimony of " suffix=")">
                    <!-- TODO: Localize this with the hearing term. -->
                    <name and="symbol" delimiter=", "/>
                  </names>
                </if>
                <else-if type="bill legislation" match="any">
                  <!-- 'legislation': For uncodified regulations, assume future code section is in status. -->
                  <text variable="status" prefix="(" suffix=")"/>
                </else-if>
              </choose>
            </group>
            <text variable="references"/>
          </group>
          <text macro="access"/>
        </group>
      </else>
    </choose>
  </macro>
  <macro name="date-legal">
    <!-- TODO: Add new item types -->
    <choose>
      <if type="legal_case">
        <group prefix="(" suffix=")" delimiter=" ">
          <text variable="authority"/>
          <choose>
            <if variable="container-title" match="any">
              <!-- Print only year for cases published in reporters-->
              <date variable="issued" form="numeric" date-parts="year"/>
            </if>
            <else>
              <date variable="issued" form="text"/>
            </else>
          </choose>
        </group>
      </if>
      <else-if type="bill legislation hearing" match="any">
        <group prefix="(" suffix=")" delimiter=" ">
          <group delimiter=" ">
            <date variable="original-date">
              <date-part name="year"/>
            </date>
            <text term="and" form="symbol"/>
          </group>
          <date variable="issued">
            <date-part name="year"/>
          </date>
        </group>
      </else-if>
      <else-if type="treaty">
        <date variable="issued" form="text"/>
      </else-if>
    </choose>
  </macro>
  <macro name="container-legal">
    <!-- TODO: Add new item types -->
    <!-- Expect legal item container-titles to be stored in short form -->
    <choose>
      <if type="legal_case">
        <group delimiter=" ">
          <choose>
            <if variable="container-title">
              <group delimiter=" ">
                <text variable="volume"/>
                <text variable="container-title"/>
                <group delimiter=" ">
                  <label variable="section" form="symbol"/>
                  <text variable="section"/>
                </group>
                <choose>
                  <if variable="page page-first" match="any">
                    <text variable="page-first"/>
                  </if>
                  <else>
                    <text value="___"/>
                  </else>
                </choose>
              </group>
            </if>
            <else>
              <group delimiter=" ">
                <choose>
                  <if is-numeric="number">
                    <label variable="number" form="short" text-case="capitalize-first"/>
                  </if>
                </choose>
                <text variable="number"/>
              </group>
            </else>
          </choose>
        </group>
      </if>
      <else-if type="bill">
        <group delimiter=", ">
          <group delimiter=" ">
            <text variable="genre"/>
            <group delimiter=" ">
              <choose>
                <if variable="chapter-number container-title" match="none">
                  <label variable="number" form="short"/>
                </if>
              </choose>
              <text variable="number"/>
            </group>
          </group>
          <text variable="authority"/>
          <text variable="chapter-number"/>
          <group delimiter=" ">
            <text variable="volume"/>
            <text variable="container-title"/>
            <text variable="page-first"/>
          </group>
        </group>
      </else-if>
      <else-if type="legislation">
        <choose>
          <if variable="number">
            <!--There's a public law number-->
            <group delimiter=", ">
              <text variable="number" prefix="Pub. L. No. "/>
              <group delimiter=" ">
                <text variable="volume"/>
                <text variable="container-title"/>
                <text variable="page-first"/>
              </group>
            </group>
          </if>
          <else>
            <group delimiter=" ">
              <text variable="volume"/>
              <text variable="container-title"/>
              <choose>
                <if variable="section">
                  <group delimiter=" ">
                    <!-- TODO: Change to label variable="section" -->
                    <text term="section" form="symbol"/>
                    <text variable="section"/>
                  </group>
                </if>
                <else>
                  <text variable="page-first"/>
                </else>
              </choose>
            </group>
          </else>
        </choose>
      </else-if>
      <else-if type="treaty">
        <group delimiter=" ">
          <number variable="volume"/>
          <text variable="container-title"/>
          <choose>
            <if variable="page page-first" match="any">
              <text variable="page-first"/>
            </if>
            <else>
              <group delimiter=" ">
                <label variable="number" form="short" text-case="capitalize-first"/>
                <text variable="number"/>
              </group>
            </else>
          </choose>
        </group>
      </else-if>
    </choose>
  </macro>
  <macro name="citation-locator">
    <!-- TODO: Add new locator types? -->
    <group delimiter=" ">
      <choose>
        <if locator="chapter">
          <label variable="locator" text-case="capitalize-first"/>
        </if>
        <else>
          <label variable="locator" form="short"/>
        </else>
      </choose>
      <text variable="locator"/>
    </group>
  </macro>
  <citation et-al-min="3" et-al-use-first="1" disambiguate-add-year-suffix="true" disambiguate-add-names="true" disambiguate-add-givenname="true" collapse="year" givenname-disambiguation-rule="primary-name-with-initials">
    <sort>
      <key macro="author-bib" names-min="3" names-use-first="1"/>
      <key macro="date-sort-group"/>
      <key macro="date-bib" sort="ascending"/>
      <key variable="status"/>
    </sort>
    <layout prefix="(" suffix=")" delimiter="; ">
      <group delimiter=", ">
        <text macro="author-intext"/>
        <text macro="date-intext"/>
        <text macro="citation-locator"/>
      </group>
    </layout>
  </citation>
  <bibliography hanging-indent="true" et-al-min="21" et-al-use-first="19" et-al-use-last="true" entry-spacing="0" line-spacing="2">
    <sort>
      <key macro="author-bib"/>
      <key macro="date-sort-group"/>
      <key macro="date-bib" sort="ascending"/>
      <key variable="status"/>
      <key macro="title"/>
    </sort>
    <layout>
      <choose>
        <!-- TODO: Add new item types -->
        <if type="bill legal_case legislation treaty" match="any">
          <!-- Legal items have different orders and delimiters -->
          <choose>
            <if variable="DOI URL" match="any">
              <text macro="legal-cites"/>
            </if>
            <else>
              <text macro="legal-cites" suffix="."/>
            </else>
          </choose>
        </if>
        <else>
          <group delimiter=" ">
            <group delimiter=". " suffix=".">
              <text macro="author-bib"/>
              <text macro="date-bib"/>
              <text macro="title-and-descriptions"/>
              <text macro="container"/>
              <text macro="event"/>
              <text macro="publisher"/>
            </group>
            <text macro="access"/>
            <text macro="publication-history"/>
          </group>
        </else>
      </choose>
    </layout>
  </bibliography>
</style>`;
