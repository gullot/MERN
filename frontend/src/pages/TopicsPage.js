function TopicsPage() {
    return (
       <>
            <h2> Web Development Concepts </h2>
            <article id="web servers" className="">
                <h3>Web Servers</h3>
                    <p>'index', as it relates to <strong>websites</strong> and <strong>servers</strong>, refers to the default 
                        page of a site. All other parts of the site will branch from there. </p>
                    <p>When viewing the dev tools on the website version, I see 4 GET methods.
                        One for the document located at my folder, one for main.css, one for main.js,
                        and one for the favicon. When viewing the local version, there are no GET methods or other requests
                        because it is accessing the page directly from the <strong>hard drive</strong> as opposed to requesting it
                        from the <strong>server</strong>.</p>
                    <p>The favicon.ico file has status 200 (OK) because the <strong>server request</strong> was able to return the 
                        icon. I believe this favicon is provided directly from oregonstate.edu. The main.css and
                        main.js has status 404 (Not Found) because there hasn't been any CSS or JS code implemented for this webpage yet.</p>
                    <p>The <strong>URL</strong> to my site is: https://web.engr.oregonstate.edu/~gullot/.
                        'https' refers to the <strong>protocol</strong>. 'web.engr.oregonstate.edu' refers to the <strong>hostname</strong> of the <strong>server</strong>.
                        '/~gullot/' refers to the <strong>path to the resource</strong> being requested.</p>
            </article>
            <article id="Frontend Design" className="">
                <h3>Frontend Design</h3>
                <p>The concept of <strong>frontend design</strong> has much to do with user experience. This includes a few key concepts, such as <strong>visual design</strong>,
                     <strong> GUIs</strong>, and the <strong>interactive experience</strong> to the user. All of these user experience concepts can be influenced by the programmer's
                    choices in color, fonts, media, icons, and navigation. Simply choosing a consistent color scheme across a website can be quite powerful in enhancing user experience.</p>
                <p><strong>The five E's of usability</strong> are shown and defined below.</p>
                    <dl>
                        <dt><strong>Effective</strong></dt>
                        <dd>Sites that are <strong>effective</strong> help a user meet their goals</dd>
                        <dt><strong>Efficient</strong></dt>
                        <dd>Sites that are <strong>efficient</strong> make it simple for the user to meet their goals.</dd>
                        <dt><strong>Easy to navigate</strong></dt>
                        <dd>Sites that are <strong>easy to navigate</strong> enable even the brand new users to navigate</dd>
                        <dt><strong>Error free</strong></dt>
                        <dd>Sites that are <strong>error free</strong> don't have any sort of errors or bugs that impeded on a user's experience</dd>
                        <dt><strong>Enjoyable/Engaging</strong></dt>
                        <dd>Sites that are <strong>enjoyable/engaging</strong> will bring the users back for more, as their experience was positive overall.</dd>
                    </dl>
                <p>The purpose of <strong>layout tags</strong> is to help break up and organize a web page for users to more easily view/organize the information on the page.
                    Visually, there is no difference to the output of using these tags, but the different types all serve a different purpose.
                    This also helps machines understand the components of a page more easily. The six <strong>page layout tags</strong> used on this page are the <strong>header, footer, nav, main, section, and article </strong>
                     page layout tags. <strong>Headers</strong> are along the top of the page and typically contain the site slogan and/or name of the site.
                    <strong>Footers</strong> typically contain the copywrite information, contact information, and legal information.
                    <strong> Nav</strong> is used to take the user from one part of the site to another.
                    <strong> Main</strong> is used to indicate that the primary block of content has begun.
                    <strong> Section</strong> is used to indicate the start of a group of information, with an <strong>article</strong> beneath it, to indicate a single specific topic within that <strong>section</strong>.</p>
                <p>The difference between <strong>text anchors</strong> and <strong>navigation</strong> is that <strong>text anchors</strong>
                    are a typically a portion of text in a paragraph (or other page layout tags) that can link to an external source.
                    <strong> Navigation</strong> is when the anchors provided link to areas of the site itself or to a separate page,
                    acting similarly to a menu.</p>
            </article>
            </>
    );
}
export default TopicsPage;