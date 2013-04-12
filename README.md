addBlockquote (jQuery)
=============

Really simple way to add a dynamically generated blockquote from text within an article. Specified with either float "right" or float "left".

Required: <strong>jQuery</strong>

How To:

<ol>
<li>Write your article.</li>
<li>Put <code>span</code> tags around whatever text you want to be in a blockquote, and add the class "callout-right" or "callout-left" to the span.</li>
<li>Include the <code>addBlockquote.js</code> file or just drop it at the end off a script tag.</li>
<li>Include <code>addBlockquote.css</code> or just make "left" and "right" classes in CSS with <code>float: left;</code> and <code>float: right;</code> assigned respectively.</li>
</ol>

Something like this is normally a better option than just copying and pasting the text into a <code>blockquote</code> tag because search engines will give duplicated content less value, essentially negating the whole point of blockquote (to emphasize).
