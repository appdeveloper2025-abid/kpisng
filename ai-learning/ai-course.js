const aiModules = [
  {
    title: "Foundation & E-Commerce Market Intelligence",
    summary: "Understand the online business ecosystem, investigate a viable niche, and build a research-backed business concept.",
    icon: "⌕",
    tools: ["ChatGPT", "Perplexity", "Google Trends", "Daraz"],
    days: [
      ["Map the e-commerce ecosystem", "Explain how an online order moves from discovery to delivery and support.", ["Choose one Pakistani online business and one international example.", "Visit their storefront and public social pages; note products, target audience, sales channel, payment, and delivery.", "Use an AI assistant to draft a comparison, asking it to mark assumptions and provide source links.", "Verify every factual claim against the businesses' public pages and correct unsupported AI guesses."], "A one-page ecosystem map comparing two businesses, their customer, channel, revenue source, and observable use of technology.", "Every business claim has a source or is clearly labelled an assumption."],
      ["Find and screen a niche", "Use actual search and marketplace evidence to compare market opportunities.", ["List three customer groups and one unmet shopping need for each.", "Compare search interest in Google Trends for Pakistan; record the date range and search terms.", "Browse Daraz listings and review questions to estimate competing offers and customer concerns.", "Ask AI to help score demand, competition, sourcing, and delivery difficulty; independently verify the evidence behind each score."], "A niche worksheet with three candidates, source links, evidence, and a reasoned first choice.", "Trends and marketplace signals are not presented as confirmed sales or guaranteed profit."],
      ["Research competitors", "Collect evidence you can later use to position your offer.", ["Find five stores or marketplace sellers serving the chosen niche.", "Record their product range, visible price, offer, delivery promise, reviews, and return information.", "Use an AI tool to summarize only the facts in your collected notes; ask it to separate facts from hypotheses.", "Identify two customer needs or questions that existing offers appear to leave unanswered."], "A competitor intelligence sheet for five competitors with dated URLs and possible market gaps.", "Prices and policies are timestamped because they can change."],
      ["Build customer personas and a buying journey", "Describe customers from real needs rather than invented demographic stereotypes.", ["Speak with three to five potential buyers or review publicly available feedback.", "Record the problem, current alternative, buying motivation, hesitation, preferred channel, and trust concern.", "Use AI to organize anonymized notes into three draft personas; do not include names, phone numbers, or private messages.", "Map each persona from awareness to evaluation, order, delivery, and repeat purchase."], "Three evidence-labelled personas and a journey map showing needs, questions, and trust moments.", "Clearly distinguish interview evidence from AI-generated suggestions."],
      ["Select the first business concept", "Make a transparent, evidence-backed decision about what to test next.", ["Score three ideas from 1–5 on demand evidence, competition, differentiation, sourcing, margin, and fulfilment.", "Add a link or note supporting every score; mark unknown costs as estimates.", "Ask AI to challenge the assumptions and list what evidence is still missing.", "Choose one idea for a small validation test and define a safe budget limit."], "A Product Opportunity Scorecard and a one-page business concept with customer, problem, offer, channel, cost assumptions, and next test.", "The preferred idea is supported by evidence and an explicit list of risks."]
    ]
  },
  {
    title: "AI Fundamentals for Business & Generative AI Applications",
    summary: "Understand AI and generative tools, write reliable prompts, review outputs, and design a responsible AI workflow.",
    icon: "✳",
    tools: ["ChatGPT", "Gemini", "Claude", "Perplexity"],
    days: [
      ["Understand AI in an online business", "Choose suitable AI tasks without confusing an AI draft with verified truth.", ["Write plain-language definitions of AI, machine learning, generative AI, and a large language model (LLM).", "Compare how a chatbot generates text with how a spreadsheet calculates a formula.", "List ten possible business uses across research, content, support, reporting, and operations.", "For each use, identify a human reviewer, possible failure, and information that must not be shared."], "An AI Use Case Report listing ten tasks, value, limitations, human review, and data-sensitivity level.", "Never enter customer passwords, payment details, identification documents, or confidential data into public AI tools."],
      ["Write structured, testable prompts", "Give an AI the context and format needed for a useful first draft.", ["Choose a real e-commerce task, such as analyzing anonymized customer questions.", "Write a prompt with role, business context, task, source material, constraints, and required output format.", "Request a distinction between supplied facts, assumptions, and unanswered questions.", "Run the same prompt twice, refine one instruction, and compare the results."], "A prompt worksheet with original prompt, improved prompt, outputs, and notes about what changed.", "A polished answer is not automatically accurate; the prompt must require verification."],
      ["Build a reusable prompt library", "Create reliable prompt templates for recurring business tasks.", ["Draft prompts for product research, competitor comparison, customer replies, and campaign planning.", "Include clear placeholders for product, audience, market, price, and evidence.", "Ask for concise tables or checklists only when those formats make the result easier to review.", "Test each prompt with a realistic example and revise ambiguous instructions."], "A versioned library of at least fifteen tested prompts grouped by e-commerce task.", "Templates contain no real personal information and explicitly prohibit invented facts or reviews."],
      ["Evaluate, verify, and improve AI output", "Use source checks and a quality rubric before publishing AI-assisted work.", ["Choose a generated answer and check factual claims against official or primary sources.", "Score relevance, factual accuracy, tone, completeness, originality, and policy compliance.", "Mark unsupported claims and rewrite or remove them instead of repeating them.", "Add a human approval step before any public post, customer reply, price, or business decision."], "A completed output-review checklist with corrected examples and a list of common failure modes.", "The reviewer can trace important claims to a verifiable source."],
      ["Plan an AI-supported workflow", "Identify where AI speeds up a task and where a person remains responsible.", ["Map one current workflow, including its input, steps, decision points, and final output.", "Mark safe drafting or summarizing tasks and tasks requiring human approval.", "Estimate time per task before and after a small trial; record how you measured it.", "Write a simple rollout plan with a test group, success metric, stop condition, and privacy checks."], "An AI Workflow Blueprint for research, content, support, marketing, and reporting with owners and checks.", "Measure actual trial results; do not claim projected productivity gains as proven."],
    ]
  },
  {
    title: "AI-Powered Product Research & Opportunity Validation",
    summary: "Discover product ideas, mine public reviews, check demand, and calculate whether a product is viable.",
    icon: "⌕",
    tools: ["ChatGPT", "Perplexity", "Google Trends", "Daraz", "Amazon"],
    days: [
      ["Discover product opportunities", "Generate a shortlist grounded in customer problems and local evidence.", ["Pick a customer segment and list recurring problems they describe.", "Use marketplace search, public reviews, and trend tools to collect evidence for possible products.", "Ask AI to group anonymized observations into needs, objections, and possible product ideas.", "Check each suggested idea against a real supplier, legal/safety constraints, and delivery practicality."], "A Product Discovery Report with five product hypotheses and evidence links.", "AI-generated ideas are hypotheses, not proof that products will sell."],
      ["Compare competitor offers and reviews", "Extract themes from publicly available customer feedback without making up statistics.", ["Collect public reviews for competing listings and remove names or identifying details.", "Tag each review by product praise, defect, delivery issue, price concern, or missing feature.", "Ask AI to summarize only the supplied review text and quote a few representative excerpts.", "Compare pricing and positioning across competitors and identify a testable differentiation idea."], "A competitor report with offer comparison, review themes, limitations, and a proposed improvement.", "State the number and source of reviews analysed; do not infer the whole market from a small sample."],
      ["Calculate costs and unit economics", "Understand your approximate contribution per order before investing.", ["Request written supplier prices and estimate inbound freight, duties/taxes, packaging, and damaged stock.", "Add platform/payment fees, customer delivery, advertising, discounts, and likely COD returns.", "Calculate contribution per delivered order and break-even units using a spreadsheet.", "Test low, expected, and high cost scenarios; mark every unconfirmed number as an estimate."], "A profitability worksheet for three shortlisted products with PKR unit economics and scenarios.", "A product-cost-only margin is not net profit; tax and individual fee treatment needs checking."],
      ["Validate demand with customers", "Gather direct evidence before ordering a large quantity.", ["Prepare five neutral interview questions about current behaviour and existing solutions.", "Speak to potential customers and record anonymized answers, objections, and willingness to test.", "Create a simple interest test with a clear product description and no misleading availability claims.", "Compare response quality with search, competitor, and supplier evidence."], "A validation log with interview observations, customer objections, source links, and next experiment.", "Interest, clicks, or stated intent do not guarantee a completed purchase."],
      ["Select the first test product", "Use an evidence-based scorecard to decide what to learn next.", ["Score each product for demand, differentiation, costs, supplier confidence, quality, shipping, and risk.", "Weight criteria that are especially important to your business and explain the weights.", "Ask AI to find weak assumptions, then verify the challenge against collected evidence.", "Choose a small, affordable test with a maximum quantity, cash limit, and success/stop criteria."], "A final Opportunity Scorecard and a low-risk test plan.", "Do not buy a large MOQ on the strength of AI forecasts or a viral trend alone."],
    ]
  },
  {
    title: "AI Content Creation for E-Commerce",
    summary: "Create useful product pages, social posts, and email campaigns with a brand voice and fact-checking process.",
    icon: "✎",
    tools: ["ChatGPT", "Claude", "Gemini", "Canva"],
    days: [
      ["Build a prompt-based content workflow", "Turn verified product facts into draft content without inventing features.", ["Prepare an approved product fact sheet: size, materials, included parts, care, price, delivery, and limitations.", "Ask AI to generate three title and benefit options for a specific target customer.", "Require the tool to use only supplied facts and flag missing details rather than invent them.", "Review the drafts for accuracy, readability, brand voice, and unsupported claims."], "A product content brief and a reviewed AI prompt/output comparison.", "Do not publish unverified claims, fabricated reviews, or guarantees."],
      ["Write a complete product page", "Create a clear listing that answers common buyer questions.", ["Draft a descriptive title that states the product and useful identifying detail.", "Write an opening benefit, specifications, what is included, usage/care, and delivery information.", "Generate FAQs from genuine buyer questions and answer only what the business can confirm.", "Check the page on mobile and compare every factual statement with the product and policy."], "A ready-to-review product page with title, description, features, benefits, FAQs, and trust details.", "Keep price, stock, warranty, and returns consistent with the live store policies."],
      ["Create multi-channel social content", "Adapt a core offer into platform-appropriate content.", ["Choose one verifiable product benefit and define the audience and call to action.", "Generate seven distinct post ideas, then select those that fit Facebook, Instagram, TikTok, and LinkedIn.", "Adapt length, format, caption, and visual direction for each chosen platform.", "Review every draft for factual accuracy, rights to images/music, accessibility, and platform policy."], "A seven-day content calendar with caption drafts, format, visual brief, and CTA.", "Adapt the idea for each channel; do not cross-post identical copy without review."],
      ["Write a permission-conscious email sequence", "Draft useful lifecycle messages and measure engagement responsibly.", ["Create a welcome email that states why the customer is receiving it and how to manage preferences.", "Draft promotional, abandoned-cart, and post-purchase messages using truthful offers and timing.", "Write specific subject lines and a single clear call to action for each email.", "Check consent, unsubscribe handling, links, spelling, offer dates, and customer data use."], "A four-email sequence with audience, trigger, copy, CTA, and review checklist.", "Only send promotional messages to appropriately opted-in recipients and follow applicable rules."],
      ["Assemble and quality-check a content portfolio", "Keep approved, reusable brand content organized.", ["Collect the product page, social calendar, email sequence, and FAQ from earlier sessions.", "Check facts, tone, terminology, inclusivity, spelling, and consistency across every channel.", "Label AI-assisted drafts and record human edits, approver, and source facts.", "Create a simple folder/version convention and a calendar for future updates."], "A Complete Content Marketing Kit with editable files and a human approval checklist.", "Archive drafts separately from approved publication-ready versions."],
    ]
  },
  {
    title: "AI Product Photography, Visual Content & Creative Asset Development",
    summary: "Make accurate product images, branded mockups, short videos, and channel-ready creative assets.",
    icon: "▧",
    tools: ["Adobe Firefly", "Canva", "Midjourney", "Runway", "CapCut"],
    days: [
      ["Create an accurate product image set", "Use AI carefully to enhance context without changing what the product really is.", ["Photograph the real product in clean natural light from front, back, detail, and scale views.", "Write image prompts describing the scene, background, lighting, framing, and the instruction to preserve exact product identity.", "Use a licensed tool to remove background or create clearly illustrative lifestyle variations.", "Compare outputs to the real item; reject altered color, components, proportions, packaging, or misleading function."], "At least five reviewed images: white-background, detail, scale/context, lifestyle concept, and promotional.", "Mark conceptual lifestyle scenes where shoppers could mistake them for real product photography."],
      ["Design store mockups and promotional assets", "Build clear branded assets for product listings and social placements.", ["Choose brand colors, type, logo use, and a short visual style guide.", "Create an uncluttered product mockup and banner in Canva or another suitable tool.", "Keep product, price, and offer accurate; use readable type and contrast.", "Export copies sized to the actual store or platform requirements and preview them on a phone."], "A branded mockup and banner pack sized for a product listing and social placements.", "Check current platform image rules and that promotional terms are legible."],
      ["Storyboard and edit a short product video", "Create a concise demonstration with a clear beginning, proof, and next step.", ["Write a 30-second script: hook, product/problem context, real demonstration, benefit, and CTA.", "Storyboard the shots and label any AI-generated scene or footage.", "Edit footage with captions, readable pacing, appropriately licensed audio, and a factual voice-over.", "Watch without sound and on a phone; remove misleading visuals and broken captions."], "A 30-second vertical video with a shot list, subtitles, and call to action.", "Clearly distinguish an illustrative AI visual from a real demonstration of the product."],
      ["Develop ad variations", "Prepare creative variations suitable for controlled tests.", ["Select one audience and campaign objective from your marketing plan.", "Create two ad versions that differ in one variable, such as hook or image.", "Check the destination page, offer, mobile legibility, and platform policy for each version.", "Name assets consistently and record hypothesis, placement, budget limit, and success metric."], "A small creative testing pack containing static, story, carousel, and reel concepts.", "Do not claim a winning creative until a fair test produces evidence."],
      ["Organize and present a media library", "Make visual assets easy to locate, reuse, and update.", ["Collect source photos, editable files, exports, prompts, and usage/license notes.", "Sort into product photos, mockups, banners, video, and approved campaign assets.", "Label file names with product, channel, dimensions, version, and approval state.", "Present the asset set and identify any gaps for the next campaign."], "A Complete Creative Asset Portfolio with organized files and usage notes.", "Retain source files and respect tool licences and the rights of people depicted."],
    ]
  },
  {
    title: "Shopify Store Development & E-Commerce Store Setup",
    summary: "Set up a Shopify store, create product listings, configure operations, and test a complete customer journey.",
    icon: "▤",
    tools: ["Shopify", "Canva", "Google Analytics", "WhatsApp Business"],
    days: [
      ["Create and structure the store", "Start a development store and organize the shopping journey.", ["Review Shopify's official current signup, plan, and trial conditions before choosing.", "Create the store with a clear name, business details, market/currency settings, and secure owner account.", "Choose an accessible theme and add a logo, brand colors, and concise homepage message.", "Create basic collections and a short menu for shop, contact, delivery, and returns."], "A Shopify development store with branded homepage, collections, navigation, and written setup notes.", "Do not purchase paid plans, apps, or domains until you understand their current fees and renewal terms."],
      ["Build accurate product listings", "Prepare searchable and persuasive product pages.", ["Create a product using verified copy and approved visuals from earlier modules.", "Add price, SKU, variants, inventory, shipping weight, and accurate description.", "Group products into useful collections and check sorting and navigation.", "Preview each listing on a phone and ensure photos and content match the real item."], "A complete product catalog with tested variant, inventory, collection, and content settings.", "Do not publish unverified inventory, benefits, warranty, or delivery promises."],
      ["Configure checkout and fulfilment", "Test available payments, shipping settings, and customer notifications.", ["Check Shopify's current payment-provider eligibility and transaction charges for your country.", "Configure only payment methods your business can actually receive and reconcile.", "Set test shipping zones and transparent delivery charges; confirm courier integration availability.", "Place a test order using the platform's safe test mode or development-store workflow."], "A payment/shipping configuration record and evidence of a successful end-to-end test order.", "Before accepting live payments, independently verify tax, payment, and courier requirements."],
      ["Add essential apps and trust information", "Choose store additions based on a real operational need.", ["Write down the problem an app should solve before searching the app store.", "Compare current pricing, data access, reviews, permissions, and cancellation terms.", "Add clear contact, returns, delivery, privacy, and FAQ information.", "Test chat/contact links and any installed app; remove tools you cannot support."], "A documented app register, storefront policy pages, working contact links, and verified messaging route.", "Minimize customer data shared with apps and avoid installing redundant plugins."],
      ["Audit and prepare for launch", "Check usability and operations before you announce a store.", ["Check navigation, search, images, prices, stock, discounts, policy links, and mobile layout.", "Place an end-to-end order and verify notifications, address capture, taxes, shipping, and inventory change.", "Ask a second person to complete a task on mobile and note points of confusion.", "Resolve critical defects and prepare rollback/support contacts before launch."], "A launch checklist, recorded test order, issue log, and launch-ready Shopify development store.", "Only switch to live operation after you have checked current Shopify settings and legal obligations."],
    ]
  },
  {
    title: "WooCommerce & WordPress E-Commerce Development",
    summary: "Build a WordPress and WooCommerce shop with secure hosting, products, payments, plugins, and a tested launch.",
    icon: "▥",
    tools: ["WordPress", "WooCommerce", "Google Site Kit", "Wordfence"],
    days: [
      ["Prepare WordPress and hosting", "Set up a secure development website before adding commerce.", ["Compare a local development environment with a hosted test site; do not point a public domain until ready.", "Check a provider's current hosting, SSL, backup, renewal, WordPress, and support terms.", "Install WordPress, create a strong unique admin password, and use a non-default admin account name.", "Set site title, time zone, permalink structure, theme, and a basic home/contact/shop structure."], "A documented development WordPress site, secure admin access, hosting/domain checklist, and navigation draft.", "Keep the site private while configuring and do not store credentials in shared notes."],
      ["Install WooCommerce and build the catalog", "Configure a usable product and inventory structure.", ["Install WooCommerce only from the official WordPress plugin directory or official source.", "Complete the setup wizard with appropriate store location, currency, product type, and units.", "Add one test product with accurate price, SKU, stock, image, description, weight, and category.", "Check product, category, cart, and checkout pages on a phone."], "A working development catalog with correctly categorized and testable products.", "Confirm plugin/theme compatibility and current update status before adding more extensions."],
      ["Set up payments, shipping, tax, and accounts", "Match checkout settings to real operational capability.", ["Check payment gateways' current availability, merchant requirements, and fees in your market.", "Configure a test payment method or sandbox before enabling live payment collection.", "Create shipping zones and sample rates; compare displayed costs with courier quotations.", "Review tax settings with qualified/current guidance and test guest/account checkout preferences."], "A test configuration sheet and a successful safe test order through cart to confirmation.", "Do not estimate or promise tax treatment without current professional/official confirmation."],
      ["Add AI, SEO, security, and support tools", "Install only necessary extensions and verify what data they access.", ["List required features and identify a reputable plugin for each: backups, security, SEO, support, or content.", "Check developer, update history, reviews, permissions, pricing, and compatibility before installing.", "Configure backups and security using official plugin documentation and test recovery where feasible.", "Set up a test contact/WhatsApp link, metadata, and analytics only after reviewing privacy and consent."], "A plugin register with purpose, source, data access, cost, update/backup owner, and test result.", "AI-created content still requires factual review; plugins do not replace security maintenance."],
      ["Test performance and deployment readiness", "Prepare a safe backup and verify core journeys before going live.", ["Update WordPress, theme, and plugins in the development environment and review for conflicts.", "Run a test order on desktop and mobile; check email notices, stock, cart, shipping, payment, and refunds.", "Check page speed and image sizes; compress media and remove unused extensions.", "Back up the site, document deployment steps, test restore where possible, and prepare a rollback plan."], "A security/performance audit, test results, backup evidence, and deployment checklist.", "Confirm HTTPS, supported software, privacy notices, and current hosting recovery process before launch."],
    ]
  },
  {
    title: "AI-Powered SEO & Search Optimization",
    summary: "Research search intent, improve product and blog content, configure technical SEO, and plan measured growth.",
    icon: "⌕",
    tools: ["Google Search Console", "Google Trends", "Google Keyword Planner", "ChatGPT"],
    days: [
      ["Research keywords and intent", "Build keyword targets using evidence, not AI-invented search volumes.", ["Write down real customer questions and product terms in their language.", "Compare phrases with Trends and Keyword Planner; record date, location, and tool limitations.", "Group phrases into discovery, comparison, purchase, and support intent.", "Ask AI to cluster supplied keywords and suggest questions, then verify each suggestion."], "A keyword map with primary, supporting, and long-tail terms mapped to customer intent and page.", "Never invent monthly search volumes or assume a keyword guarantees rankings."],
      ["Optimize product pages", "Improve titles, descriptions, images, and structure for people first.", ["Select one target product query and confirm the page genuinely answers its intent.", "Write a clear title and helpful meta description that accurately represent the offer.", "Use descriptive headings, plain-language content, useful image alt text, and internal links.", "Review mobile readability, duplicate copy, structured data support, and policy consistency."], "An on-page SEO checklist and revised title, meta description, page outline, and alt text for a product.", "Do not stuff keywords or make content less useful to customers."],
      ["Plan useful articles and topic clusters", "Create helpful editorial content that supports product discovery.", ["List customer questions before and after purchase using support records or public research.", "Group related questions into one pillar topic and supporting articles.", "Use AI to outline one article from verified sources and identify claims needing citations.", "Edit for original experience, accurate details, clear headings, and relevant internal links."], "Three article briefs or drafts with search intent, sources, audience, and internal-link targets.", "Review generated copy for originality, factual errors, and whether it genuinely helps a reader."],
      ["Set up indexing and technical checks", "Help crawlers access the correct public pages.", ["Verify website ownership in Google Search Console using the offered verification method.", "Locate the platform-generated sitemap and submit its URL in Search Console.", "Inspect representative product and category URLs and record indexing/crawl issues.", "Review robots directives, canonical URLs, HTTPS, broken links, and mobile experience."], "A technical SEO log with Search Console property, sitemap status, inspected pages, and fixes.", "Indexing and ranking are not instant or guaranteed; never block important product pages accidentally."],
      ["Audit and plan 90-day improvements", "Prioritize SEO changes from measured search and sales evidence.", ["Export available queries, clicks, impressions, landing pages, and conversion data.", "Identify pages with high impressions but poor clicks, useful traffic but low conversion, and technical issues.", "Ask AI to summarize anonymized exports; independently recompute and verify every numerical claim.", "Prioritize fixes by customer impact, effort, confidence, owner, and review date."], "A prioritized 90-day SEO Action Plan with baseline, owners, measurement, and review dates.", "Treat observed correlation as a clue, not proof an SEO change caused sales."],
    ]
  },
  {
    title: "AI-Powered Digital Marketing & Advertising",
    summary: "Plan channel strategy, configure secure advertising assets, create controlled campaigns, and optimize against real business outcomes.",
    icon: "↗",
    tools: ["Meta Business Suite", "Meta Ad Library", "Google Ads", "TikTok Academy"],
    days: [
      ["Build a marketing strategy and KPI plan", "Connect customer needs to a realistic channel, offer, and measurement.", ["Use your validated customer persona and customer journey to identify one campaign goal.", "Choose a channel based on where the audience is and what the product needs to demonstrate.", "Define a modest spend cap, campaign period, audience, landing page, and stop condition.", "Set baseline measures such as qualified visits, placed orders, delivered orders, CPA, and contribution."], "A Digital Marketing Strategy with audiences, channels, objectives, budget assumptions, and KPIs.", "Do not treat attributed revenue or platform-reported ROAS as verified profit."],
      ["Configure secure Meta assets", "Prepare a business presence and campaign structure through official Meta tools.", ["Create or access Meta Business Suite through the official site using a secured business account.", "Enable two-factor authentication and grant only role-appropriate access.", "Complete page information, contact details, privacy links, and a verified website destination.", "Review current advertising policy, tracking consent, audience configuration, and billing requirements."], "A documented Meta asset checklist, access register, and audience description.", "Never share login credentials, authentication codes, or customer lists without a lawful basis and permission."],
      ["Build and review a campaign draft", "Create ad content that accurately matches its landing page.", ["Choose one objective and campaign structure that fits your chosen customer journey.", "Ask AI for multiple copy hooks using only approved product facts and one clear call to action.", "Create suitable creative variations; check rights, caption legibility, product accuracy, and platform specifications.", "Preview destination links and campaign settings; save as draft until someone approves it."], "A complete draft campaign with copy, creative, audience rationale, budget cap, and landing page.", "Check current ad policies and required disclosures before any public campaign goes live."],
      ["Read performance and optimize cautiously", "Interpret advertising metrics in the context of delivered orders and costs.", ["Export a sample campaign report with spend, impressions, clicks, conversions, and dates.", "Calculate CTR, CPC, CPM, conversion rate, CPA, and ROAS with the metric definitions noted.", "Compare placed orders to delivered/retained orders and subtract product, fulfilment, fee, and return costs.", "Identify one change to test, log the reason, and retain the original result as a baseline."], "A Campaign Optimization Report with verified calculations, observations, and one next experiment.", "Do not scale spend based only on clicks, platform recommendations, or early attribution."],
      ["Create a multi-channel acquisition plan", "Coordinate owned, organic, and paid marketing around one offer.", ["Choose the role for each channel: SEO, content, email, marketplace, or paid social/search.", "Map message, creative, CTA, landing page, tracking parameter, owner, and timing for each.", "Create a reporting cadence and attribution limitations note.", "Ask AI to find missing handoffs and then review against real operational capacity."], "A Complete Customer Acquisition Plan with a test calendar and customer-service/fulfilment readiness checks.", "Make sure the business can honour its offer and respond to increased order volume."],
    ]
  },
  {
    title: "Social Commerce, Influencer Marketing & Marketplace Selling",
    summary: "Prepare social profiles and content, evaluate influencer partnerships, and develop compliant marketplace listings.",
    icon: "♡",
    tools: ["Instagram for Business", "TikTok Business", "Daraz Seller Center", "Meta Ad Library"],
    days: [
      ["Prepare business social profiles", "Make it easy for a customer to understand and contact the brand.", ["Review Instagram, Facebook, and TikTok business profile requirements through official channels.", "Use matching brand name, logo, concise description, support contact, and current business links.", "Make one helpful pinned post explaining the product, delivery area, and how customers can order.", "Check each profile on mobile and ask a peer to find price/contact/order instructions."], "Three completed profile checklists and a link-in-bio/customer contact plan.", "Check that public claims, contact details, and links are current."],
      ["Create a two-week social calendar", "Plan useful channel-specific content rather than posting the same thing everywhere.", ["Choose four content themes: demonstration, customer question, behind the scenes, and offer.", "Build a 14-day calendar of posts, stories, reels, or short videos with a single purpose each.", "Use AI to draft captions and scripts from approved facts; edit for each platform and audience.", "Add creator, asset, publication date, CTA, tracking link, and success measure."], "A 14-day social calendar with post formats, copy drafts, creative requirements, and review owner.", "Follow platform rules, music/asset licences, endorsements, and privacy requirements."],
      ["Evaluate influencer fit", "Compare audience relevance and authentic engagement before outreach.", ["Identify ten creators who post in the selected niche and market.", "Review public recent content, likely audience fit, quality of engagement, brand safety, and sponsored post style.", "Ask creators for current media kits and available audience data; record what is self-reported.", "Score fit, audience, trust, cost, deliverables, and measurement; shortlist a few for respectful outreach."], "An Influencer Evaluation Report with public evidence, questions for creators, and shortlist.", "Do not present a follower count or AI estimate as proof of genuine reach or sales."],
      ["Plan a transparent creator campaign", "Agree expectations and tracking before campaign assets are published.", ["Write a brief with audience, message, approved factual claims, deliverables, timeline, and usage rights.", "Clarify compensation, product gifting, disclosure of paid/affiliate relationship, and cancellation terms in writing.", "Agree unique tracked links or codes and the measurement window before launch.", "Review the delivered content for disclosure, accuracy, rights, and current platform rules."], "An Influencer Campaign Plan and draft creator brief/contract checklist.", "Use clear sponsorship disclosure and respect creator and customer rights."],
      ["Prepare marketplace listings", "Optimize a listing for marketplace shoppers and platform rules.", ["Review official Daraz Seller Center listing rules, prohibited products, fees, and fulfilment requirements.", "Write an accurate title, category, attributes, product specs, variants, price, and stock.", "Add clear, genuine product photos and concise buyer-focused copy from previous modules.", "Compare listing quality with competitors and develop a multi-channel price/stock reconciliation routine."], "A Daraz-ready listing draft and Marketplace Expansion Plan covering pricing, fulfilment, and channel risk.", "Check current marketplace rules, commission, returns, and account eligibility before publishing."],
    ]
  },
  {
    title: "Customer Support Automation, WhatsApp Commerce & Email Marketing",
    summary: "Map support needs, create safe chatbot flows, set up WhatsApp Business, automate consent-based email, and measure service quality.",
    icon: "☏",
    tools: ["WhatsApp Business", "Meta Business Learn", "Mailchimp", "HubSpot"],
    days: [
      ["Map the customer-support journey", "Decide which questions need a human and where simple automation can help.", ["Collect common product, delivery, payment, COD, cancellation, and return questions.", "Group each question by urgency, information needed, and responsible support owner.", "Write approved answers from actual store policies and flag questions requiring a person.", "Define reply hours, escalation path, response target, and safe handling of customer information."], "A Customer Support Workflow with channel, intent, approved response, owner, and escalation path.", "Do not share private order details until verifying identity through an appropriate process."],
      ["Design a safe chatbot and FAQ flow", "Make the bot useful, bounded, and easy to hand off to a person.", ["Create a short FAQ from approved product, shipping, payment, and return policies.", "Design a welcome choice, question categories, clarifying question, and human handoff.", "Instruct the bot to answer only from the approved FAQ and admit when it does not know.", "Test at least ten sample conversations, including a wrong answer, refund complaint, and urgent escalation."], "A chatbot decision tree, tested sample conversations, approved FAQ, and human-handoff rule.", "Do not let an untested bot invent prices, confirm order status, approve refunds, or promise delivery."],
      ["Configure WhatsApp Business responsibly", "Set up a professional contact channel and draft useful order/support replies.", ["Install WhatsApp Business through the official app store and review the current product terms.", "Set business profile, hours, category, description, and support contact.", "Create labels and approved quick replies for inquiry, COD confirmation, dispatch, and issue follow-up.", "Test with a consenting contact and record how human staff handle opt-out or escalation."], "A WhatsApp Business profile and documented inquiry/order-confirmation templates.", "Use customer messaging only in line with consent, applicable rules, and WhatsApp policies."],
      ["Plan email lifecycle messages", "Create helpful automated emails with consent, frequency, and opt-out controls.", ["Choose a provider after comparing current free/paid plans, data terms, and integrations.", "Create a consent-based welcome flow and documented sign-up source.", "Draft abandoned-cart, order follow-up, and retention messages with accurate links and offer terms.", "Test unsubscribe, suppression, personalization fields, mobile layout, and a sample send before activation."], "An email campaign with welcome, cart recovery, promotional, and retention drafts plus test evidence.", "Do not upload scraped contacts or send marketing without appropriate permission."],
      ["Measure and improve customer engagement", "Review whether automation improves service without hiding customer problems.", ["Track response time, chatbot handoff, resolution, opt-out, email delivery, and complaint themes.", "Compare a defined baseline period with a small supervised test.", "Review failed bot answers and update the approved knowledge base with a named owner.", "Prepare a demo that shows the support workflow, human control, data minimization, and results."], "A Customer Engagement System demo and an improvement report based on measured results.", "Keep a human available for payments, personal data, complaints, refunds, and unexpected cases."],
    ]
  },
  {
    title: "Data Analytics, Business Intelligence, Automation & Business Launch",
    summary: "Configure analytics, build useful dashboards, forecast responsibly, automate tested workflows, and present your launch-ready capstone.",
    icon: "▥",
    tools: ["Google Analytics", "Looker Studio", "Google Sheets", "Zapier", "Make"],
    days: [
      ["Plan analytics and tracking", "Define what business questions the data should answer before adding tags.", ["List the questions you need to answer: traffic source, product interest, checkout drop-off, and sales.", "Create a KPI dictionary defining order, delivered order, revenue, conversion, CAC, margin, and date range.", "Review privacy/consent requirements and platform analytics documentation for your store.", "Configure GA4 or available store analytics in test mode; verify an event without sharing personal data."], "An analytics plan, KPI data dictionary, and test-event checklist.", "Avoid collecting personal or sensitive data in analytics events and follow applicable consent requirements."],
      ["Build a performance dashboard", "Summarize comparable sales and marketing data accurately.", ["Prepare a clean sample or anonymized export with consistent date and currency formats.", "Calculate traffic, conversion, sales, delivered orders, returns, costs, and campaign measures.", "Build a simple Sheets or Looker Studio dashboard with date range and source labels.", "Check totals against source reports and document missing, delayed, or attributed data."], "A Business Performance Dashboard with verified totals and written metric definitions.", "Show where numbers come from and do not combine incompatible attribution windows."],
      ["Forecast demand and personalize carefully", "Use simple scenarios and segmentation without overstating AI prediction.", ["Create a dated sales history table and mark promotions, stockouts, and unusual events.", "Build low, expected, and high forecasts using a transparent spreadsheet baseline.", "Ask AI to explain patterns in an anonymized table; verify calculations with formulas.", "Draft a small retention or recommendation experiment based on consented, non-sensitive segments."], "A sales-forecast worksheet with assumptions, scenarios, uncertainty, and a personalization test.", "A model trained on limited history can be wrong; do not treat its forecast as guaranteed revenue."],
      ["Automate a business workflow", "Connect tools only after each manual step works and can fail safely.", ["Draw the manual trigger, inputs, decisions, actions, owner, exception, and audit record.", "Choose Zapier, Make, or a manual process based on current pricing, access, and need.", "Build a test workflow using sample data—for example, form submission to a notification and order log.", "Test duplicates, missing fields, failures, permissions, and manual override before activation."], "An AI/automation Workflow Blueprint with a tested prototype, error handling, and owner.", "Use least-privilege access and never automate payments, refunds, or customer-facing promises without review."],
      ["Assemble and present the capstone", "Demonstrate an integrated, evidence-backed business and a realistic launch decision.", ["Collect your niche research, product validation, supplier evidence, and unit economics.", "Demonstrate the store, accurate AI-assisted content/visuals, SEO, marketing, and support workflows.", "Present analytics dashboard, forecast, automation design, privacy/security checks, and remaining risks.", "Run a launch-readiness checklist for mobile purchase, policies, delivery, order notifications, fulfilment, and support."], "A complete AI Powered E-Commerce Business Portfolio, live/demo store, launch plan, and evidence-based presentation.", "Launch only when the owner can fulfill orders, resolve issues, protect data, and meet applicable requirements."],
    ]
  }
];

const aiToolLinks = {
  "ChatGPT": "https://chatgpt.com/",
  "Claude": "https://claude.ai/",
  "Gemini": "https://gemini.google.com/",
  "Perplexity": "https://www.perplexity.ai/",
  "Google Trends": "https://trends.google.com/trends/",
  "Daraz": "https://www.daraz.pk/",
  "Amazon": "https://www.amazon.com/",
  "Google Keyword Planner": "https://ads.google.com/home/tools/keyword-planner/",
  "Google Search Console": "https://search.google.com/search-console/",
  "Google Analytics": "https://analytics.google.com/",
  "Looker Studio": "https://lookerstudio.google.com/",
  "Google Sheets": "https://sheets.google.com/",
  "Shopify": "https://www.shopify.com/",
  "WooCommerce": "https://woocommerce.com/",
  "WordPress": "https://wordpress.org/",
  "Canva": "https://www.canva.com/",
  "Adobe Firefly": "https://firefly.adobe.com/",
  "Midjourney": "https://www.midjourney.com/",
  "Runway": "https://runwayml.com/",
  "CapCut": "https://www.capcut.com/",
  "Meta Business Suite": "https://business.facebook.com/",
  "Meta Ad Library": "https://www.facebook.com/ads/library/",
  "Google Ads": "https://ads.google.com/",
  "TikTok Academy": "https://www.tiktok.com/business/learning",
  "Instagram for Business": "https://business.instagram.com/",
  "TikTok Business": "https://www.tiktok.com/business/",
  "Daraz Seller Center": "https://sellercenter.daraz.pk/",
  "WhatsApp Business": "https://www.whatsapp.com/business/",
  "Meta Business Learn": "https://www.facebook.com/business/learn",
  "Mailchimp": "https://mailchimp.com/",
  "HubSpot": "https://www.hubspot.com/",
  "Google Site Kit": "https://sitekit.withgoogle.com/",
  "Wordfence": "https://www.wordfence.com/",
  "Zapier": "https://zapier.com/",
  "Make": "https://www.make.com/"
};

function renderAiSiteBranding() {
  document.querySelectorAll(".brand").forEach((brand) => {
    const isFooter = brand.classList.contains("footer-brand");
    brand.setAttribute("aria-label", "KPI Learning Platform home");
    brand.innerHTML = `<img class="brand-logo" src="../assets/images/KPILogo.png" alt=""><span class="brand-name">KPI Learning<span>LEARNING PLATFORM</span></span>`;
    if (isFooter) brand.href = "../index.html";
  });
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
    favicon.href = "../assets/images/KPILogo.png";
    favicon.type = "image/png";
  }
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = "#ed1c24";
  document.title = document.title.replace(/AI Powered E-Commerce( Academy)?/g, "KPI Learning Platform");
}

function renderAiOverview() {
  const grid = document.querySelector("#ai-module-grid");
  if (!grid) return;
  grid.innerHTML = aiModules.map((module, index) => `<a class="ai-module-card" href="module-${String(index + 1).padStart(2, "0")}.html"><span class="ai-module-card-top"><span class="ai-module-icon">${module.icon}</span><span>MODULE ${String(index + 1).padStart(2, "0")}</span></span><strong>${module.title}</strong><p>${module.summary}</p><span class="ai-module-days">5 practical sessions <b>↗</b></span></a>`).join("");
}

function renderAiModule() {
  const root = document.querySelector("#ai-module-page");
  if (!root) return;
  const index = Number(document.body.dataset.module) - 1;
  const module = aiModules[index];
  if (!module) return;
  const number = String(index + 1).padStart(2, "0");
  const toolLinks = module.tools.map((tool) => `<a href="${aiToolLinks[tool]}" target="_blank" rel="noopener noreferrer">${tool} ↗</a>`).join("");
  const sessions = module.days.map((day, dayIndex) => `<article class="ai-session" id="day-${dayIndex + 1}"><div class="ai-session-heading"><span class="ai-session-day">DAY ${String(dayIndex + 1).padStart(2, "0")}</span><span class="ai-session-time">Guided practical session</span></div><h2>${day[0]}</h2><p class="ai-session-goal"><strong>Goal:</strong> ${day[1]}</p><h3>Do these steps</h3><ol class="ai-session-steps">${day[2].map((step) => `<li>${step}</li>`).join("")}</ol><div class="ai-deliverable"><span>YOUR OUTPUT</span><p>${day[3]}</p></div><p class="ai-quality-check"><strong>Quality check:</strong> ${day[4]}</p><label class="ai-complete"><input type="checkbox" data-progress="${index}-${dayIndex}"><span>Mark this session complete on this device</span></label></article>`).join("");
  const previous = index > 0 ? `<a class="ai-page-nav" href="module-${String(index).padStart(2, "0")}.html"><span>← PREVIOUS MODULE</span><strong>${aiModules[index - 1].title}</strong></a>` : `<a class="ai-page-nav" href="index.html"><span>← COURSE OVERVIEW</span><strong>All 12 modules</strong></a>`;
  const next = index < aiModules.length - 1 ? `<a class="ai-page-nav ai-page-next" href="module-${String(index + 2).padStart(2, "0")}.html"><span>NEXT MODULE →</span><strong>${aiModules[index + 1].title}</strong></a>` : `<a class="ai-page-nav ai-page-next" href="index.html"><span>CAPSTONE COMPLETE</span><strong>Review all modules ↗</strong></a>`;
  root.innerHTML = `<section class="ai-module-hero page-width"><a class="breadcrumb" href="index.html">← All AI course modules</a><div class="eyebrow">AI POWERED E-COMMERCE · MODULE ${number} OF 12</div><h1>${module.title}</h1><p>${module.summary}</p><div class="ai-module-meta"><span>5 guided sessions</span><span>Practical project output</span><span>Self-paced</span></div><div class="ai-module-progress" role="progressbar" aria-label="Module progress" aria-valuemin="0" aria-valuemax="5" aria-valuenow="0"><span></span></div><p class="ai-progress-caption" aria-live="polite">0 of 5 sessions complete on this device</p><div class="ai-tools-row"><strong>TOOLS TO EXPLORE</strong>${toolLinks}</div></section><section class="ai-learning-layout page-width"><aside class="ai-day-nav"><strong>MODULE PLAN</strong>${module.days.map((day, i) => `<a href="#day-${i + 1}"><span>DAY ${String(i + 1).padStart(2, "0")}</span>${day[0]}</a>`).join("")}<a href="#module-output"><span>FINAL PROJECT</span>Module portfolio</a></aside><div class="ai-sessions">${sessions}<section class="ai-module-output" id="module-output"><div class="eyebrow">MODULE PORTFOLIO</div><h2>Bring the five sessions together.</h2><p>Review your five outputs, combine them into one clearly labelled module folder, and add source links, dated assumptions, and your next action.</p><ul><li>Save drafts separately from approved versions.</li><li>Mark which content or analysis used AI and record your human review.</li><li>Remove personal or confidential information from shared artifacts.</li><li>Write one paragraph about what evidence changed your business decision.</li></ul><a class="button button-primary" href="index.html">Back to all 12 modules <span>↗</span></a></section><nav class="ai-module-pagination" aria-label="AI course module navigation">${previous}${next}</nav></div></section>`;
  const progressKey = `ai-course-module-${index + 1}`;
  const saved = JSON.parse(localStorage.getItem(progressKey) || "[]");
  const boxes = [...root.querySelectorAll("[data-progress]")];
  boxes.forEach((box) => {
    box.checked = saved.includes(box.dataset.progress);
    box.addEventListener("change", () => {
      const completed = boxes.filter((item) => item.checked).map((item) => item.dataset.progress);
      localStorage.setItem(progressKey, JSON.stringify(completed));
      updateProgress();
    });
  });
  function updateProgress() {
    const completedCount = boxes.filter((box) => box.checked).length;
    const progress = root.querySelector(".ai-module-progress");
    progress.setAttribute("aria-valuenow", String(completedCount));
    progress.querySelector("span").style.width = `${completedCount * 20}%`;
    root.querySelector(".ai-progress-caption").textContent = `${completedCount} of 5 sessions complete on this device`;
  }
  updateProgress();
  document.title = `Module ${number}: ${module.title} — KPI Learning Platform`;
}

document.addEventListener("DOMContentLoaded", () => {
  const courseDirectory = document.createElement("script");
  courseDirectory.src = "../assets/js/course-directory.js";
  document.head.append(courseDirectory);
  renderAiSiteBranding();
  renderAiOverview();
  renderAiModule();
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  document.querySelectorAll(".footer-links").forEach((footerLinks) => {
    const aboutLink = document.createElement("a");
    aboutLink.href = "../about.html";
    aboutLink.textContent = "About Us";
    footerLinks.insertBefore(aboutLink, footerLinks.children[1] || null);
  });
  if (toggle && nav && toggle.dataset.menuBound !== "true") {
    toggle.dataset.menuBound = "true";
    toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    toggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
    nav.classList.toggle("is-open", !expanded);
    });
  }
});
