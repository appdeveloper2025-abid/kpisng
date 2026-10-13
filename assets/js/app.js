const lessons = [
  {
    title: "Introduction to Local E-commerce",
    short: "Understand how online selling works and where your business can fit in Pakistan.",
    icon: "◈",
    topics: ["Meaning and types of e-commerce", "Local e-commerce vs. international e-commerce", "Dropshipping, reselling, and private labeling", "Shopify, Daraz, and WooCommerce overview", "Understanding the Pakistani e-commerce market", "Business models, investment, profit, and risks"],
    explain: ["E-commerce is the buying and selling of products or services online. In Pakistan, a business may sell through its own website, a marketplace, social channels, or a combination of these.", "A local-first business can offer familiar payment choices such as cash on delivery (COD), serve local delivery zones, and communicate in the languages its customers use. International selling can open a wider market, but adds cross-border payments, shipping, duties, and compliance.", "A dropshipper markets products that a supplier ships directly; a reseller buys existing products to sell; a private-label seller works with a manufacturer to sell a product under its own brand. Each approach changes the investment, control, delivery time, and risk you carry.", "A marketplace can provide existing shopper traffic; an independent store gives more control over branding and customer relationships. Social commerce can be an accessible starting point, but still needs clear order records, policies, and customer service.", "There is no guaranteed profit. Plan for product cost, packaging, delivery, payment or platform fees, advertising, returns, taxes, and cash-flow delays. Start by testing demand with an amount you can afford to lose."],
    practice: ["Choose one model—reselling, dropshipping, or private label—and write down its likely startup costs and biggest risk.", "Compare one Pakistani marketplace listing with one independent online store. Note how each handles delivery, price, trust, and returns.", "Create a one-page business assumption: customer, problem, offer, channel, cost, and the smallest safe test."],
    resourceKeys: ["shopify", "daraz", "woocommerce", "sbp", "fbr"]
  },
  {
    title: "Product Hunting for Local E-commerce",
    short: "Research a real customer need, then check whether the numbers can work.",
    icon: "⌕",
    topics: ["Product research and niche selection", "Finding promising products for Pakistani customers", "Competitor analysis and demand research", "Using Google Trends and marketplace research", "Calculating costs, profit margins, and selling prices", "Spotting seasonal, trending, and problem-solving products"],
    explain: ["Start with a customer group and a problem, not just a viral product. A useful shortlist considers demand, competition, sourcing reliability, shipping practicality, product quality, and room for profit.", "Read reviews and questions on marketplaces and social platforms. Look for repeated customer frustrations, unclear product claims, and ways to make the buying experience better. Treat likes and views as clues—not proof of purchases.", "Use Google Trends to compare relative search interest over time and by region. Marketplace listings, sold indicators where available, review recency, and competitor activity provide additional signals. Validate trends with more than one source.", "Calculate landed and delivered cost: supplier price + inbound freight + duties or taxes where applicable + packaging + customer delivery + advertising + platform/payment charges + expected return losses. Net contribution per order is selling price minus all variable costs.", "Seasonal demand may depend on weather, school calendars, or local events. Check the trend history and plan inventory cautiously; a short-lived spike can leave you with unsold stock."],
    practice: ["List three product ideas for a specific customer and score each from 1–5 on demand evidence, competition, sourcing, delivery ease, and margin.", "For your top idea, save five competitor listings and note their price, offer, reviews, delivery promise, and unanswered customer questions.", "Use the calculator below with realistic estimates. Keep a buffer for returns and ad costs; a positive product-cost-only margin is not enough."],
    resourceKeys: ["trends", "daraz", "meta-library", "google-keyword", "alibaba"],
    calculator: true
  },
  {
    title: "Sourcing Products Locally and Internationally",
    short: "Find reliable suppliers, evaluate quality, and understand your true sourcing costs.",
    icon: "⌖",
    topics: ["Finding local wholesalers and manufacturers", "Sourcing from Pakistani marketplaces and suppliers", "Exploring Alibaba and international suppliers", "Supplier verification and product quality checks", "Understanding minimum order quantities (MOQ)", "Shipping costs, customs, samples, and negotiation"],
    explain: ["Search business directories, trade fairs, manufacturer networks, and relevant local wholesale markets. Marketplace listings can help discover vendors, but a listing alone does not verify a supplier or product.", "Before paying, confirm the legal business identity and contact details, request current product photos or a sample, agree on exact specifications in writing, and independently check references where possible.", "MOQ is the smallest quantity a supplier will accept for an order. Compare the unit price at different quantities with the total cash tied up, storage needs, and realistic sell-through—not just the discount.", "For imports, request a written quote that identifies product specification, quantity, Incoterm, packaging, shipping method, and lead time. Ask a qualified customs agent or relevant authority about current classification, duties, taxes, and import requirements.", "Use a protected payment method where available and avoid pressure to pay outside agreed channels. For a first order, samples and a small trial can be worth more than a low quoted unit price."],
    practice: ["Prepare a supplier comparison sheet for three vendors: verification, unit price, MOQ, sample cost, lead time, payment terms, and return/defect policy.", "Write a sample request that specifies material, dimensions, color, packaging, and acceptable defects.", "Calculate landed cost per sellable unit including freight, duties/taxes (verified for your item), inspection, and damaged units."],
    resourceKeys: ["alibaba", "daraz", "pakistan-trade", "fbr", "psw"]
  },
  {
    title: "Creating an Online Store",
    short: "Build a clear, trustworthy storefront that works beautifully on a phone.",
    icon: "▤",
    topics: ["Creating a Shopify store from scratch", "Exploring Daraz, WooCommerce, and other platforms", "Domain setup and professional store branding", "Adding products, images, prices, and descriptions", "Designing navigation, collections, and product pages", "Setting up policies, contact pages, and mobile-friendly layouts"],
    explain: ["Choose a channel based on your skills, budget, need for control, and customer discovery. Shopify is hosted and subscription-based; WooCommerce runs on WordPress and needs hosting/maintenance; Daraz is a marketplace with its own seller rules and fees. Check local payment and delivery integrations before committing.", "Use a short, memorable domain and consistent name, colors, and tone. Check domain availability and trademark conflicts before investing in branding.", "A strong product page uses accurate photos, useful dimensions or sizing, clear price and availability, honest benefits, delivery expectations, and a visible returns/contact policy. Avoid claims you cannot substantiate.", "Keep navigation simple: shop, categories, delivery/returns, about, and contact. Test the entire journey on a phone, including checkout, confirmation messages, and links.", "Before taking orders, place a test order and verify that stock, delivery fee, customer notifications, policies, and support details behave as expected."],
    practice: ["Sketch a storefront for one product: homepage message, category, product page, trust information, and checkout steps.", "Write one product description with specifications, three evidence-based benefits, delivery details, and care instructions.", "Ask a friend to find the price, delivery terms, and contact link on a phone without your help; simplify anything they miss."],
    resourceKeys: ["shopify", "daraz", "woocommerce", "wordpress", "canva", "namecheap"]
  },
  {
    title: "Shipment and COD Accounts",
    short: "Set up order delivery with clear records, careful packing, and COD reconciliation.",
    icon: "▣",
    topics: ["Understanding cash on delivery (COD)", "Creating courier business accounts", "Shipment booking and tracking", "Packaging, delivery charges, and return-to-origin (RTO)", "Managing addresses and delivery failures", "COD remittances and order reconciliation"],
    explain: ["With COD, the customer pays the courier on delivery. The courier collects the amount and remits it to the merchant under its account terms; the exact schedule, charges, coverage, and requirements vary by provider.", "Ask courier companies about account opening, serviceable areas, COD fee, weight slabs, settlement schedule, lost/damaged parcel claims, prohibited goods, and RTO charges. Review current written terms before choosing.", "Confirm the phone number, full address, city, nearby landmark, product, and total due with the customer before dispatch. Share tracking details and use protective packaging suited to the product.", "RTO means a parcel returns to the merchant without successful delivery. Track delivery attempts and reasons; address verification, order confirmation, and responsive customer contact can reduce avoidable failures.", "Reconcile each order against courier booking, tracking status, delivered COD, fees, returns, and bank deposit. Investigate differences and keep evidence such as booking receipts and settlement statements."],
    practice: ["Make a dispatch checklist: confirm order, check address, inspect item, pack safely, record weight, book shipment, send tracking.", "Create a simple reconciliation sheet with order ID, courier, COD amount, fee, status, remittance received, and difference.", "Ask two couriers for written quotes and compare total delivered and RTO cost for your likely parcel size and destination."],
    resourceKeys: ["tcs", "leopards", "trax", "post", "sbp"]
  },
  {
    title: "Advertising Through Different Platforms",
    short: "Choose suitable organic and paid channels, and measure what each campaign achieves.",
    icon: "↗",
    topics: ["Introduction to paid and organic marketing", "Facebook and Instagram advertising", "TikTok, Google, and YouTube advertising", "Creating business pages and advertising accounts", "Audiences, budgets, and campaign objectives", "Tracking clicks, conversions, and campaign performance"],
    explain: ["Organic content builds reach over time; paid advertising buys distribution and testing opportunities. Neither guarantees sales—your offer, creative, product page, fulfilment, and audience all matter.", "Set up business profiles with consistent branding, accurate contact details, and account security. Use official platform learning resources to understand current ad policies and account requirements.", "Pick an objective that matches your goal, such as awareness, traffic, leads, or sales. Start with a tightly controlled test budget and a clear stop condition you can afford.", "Track link clicks, landing-page visits, add-to-cart events, purchases, cost per acquisition (CPA), and return on ad spend (ROAS). Install tracking correctly and respect consent and platform policies.", "A high click rate does not necessarily mean profitable orders. Review the whole path from ad impression to delivered order, including COD cancellations and returns."],
    practice: ["Choose one platform based on where your target customers spend time; explain why with audience evidence.", "Write a test plan with a single goal, target audience, creative variation, budget cap, duration, and success/stop metric.", "Create a simple funnel report that distinguishes clicks, orders placed, delivered orders, spend, revenue, and contribution after costs."],
    resourceKeys: ["meta-business", "meta-library", "tiktok", "google-ads", "youtube", "analytics"]
  },
  {
    title: "Ad Creation and Promotional Strategies",
    short: "Make honest, memorable creative—and improve it through controlled testing.",
    icon: "✳",
    topics: ["Creating product images, videos, and ad copy", "Using Canva and AI tools for advertising creatives", "Writing hooks, headlines, and calls to action", "Understanding A/B testing and retargeting", "Testing products with controlled budgets", "Optimizing using ROAS, CPA, and conversion rates"],
    explain: ["Show the real product clearly in context. Use good light, readable framing, accurate colors, and captions for sound-off viewing. Avoid exaggerated outcomes or misleading before-and-after claims.", "A hook earns attention, the body explains a relevant benefit with proof, and the call to action tells the viewer what to do next. Keep the promise consistent with the product page.", "A/B testing changes one meaningful variable at a time—such as opening line or image—while audience, budget, and timing stay comparable. Decide the measurement before launching.", "Retargeting can reach people who previously engaged, subject to consent, platform rules, and audience-size availability. Exclude recent purchasers when the offer is no longer relevant.", "ROAS is attributed revenue divided by ad spend; CPA is ad spend divided by acquired customers or conversions. Interpret both alongside gross margin, fulfilment cost, refunds, and COD delivery rate."],
    practice: ["Create two versions of one product ad that differ only in the opening hook. State the specific customer problem each hook addresses.", "Plan a low-risk test with a fixed spending cap, one primary metric, and a calendar check-in; do not increase spend on a single lucky result.", "Calculate a break-even ad cost from selling price minus product, delivery, packaging, platform, and expected return costs."],
    resourceKeys: ["canva", "meta-library", "tiktok", "google-ads", "capcut"]
  },
  {
    title: "Customer Dealing and Experience",
    short: "Turn clear, respectful customer support into more reliable orders and lasting trust.",
    icon: "♡",
    topics: ["Handling inquiries through WhatsApp and Facebook", "Confirming COD orders before dispatch", "Professional communication and objection handling", "Managing cancellations, complaints, and returns", "Building trust and encouraging repeat purchases", "Maintaining customer records and measuring satisfaction"],
    explain: ["Reply promptly and clearly. Share accurate availability, price, delivery range, payment options, and return terms. Never claim a delivery date or product result you cannot ensure.", "For COD orders, politely confirm item/variant, total amount, full address, phone, and that someone can receive the parcel. Make confirmation easy and avoid sending unsolicited repeated messages.", "Listen to the concern, acknowledge it, then offer a practical next step. Keep a written record of the issue and resolution; escalate safety, payment, and privacy concerns appropriately.", "Publish a straightforward cancellation and returns process consistent with applicable laws and marketplace policies. Inspect returned products fairly and communicate refund or replacement steps.", "Collect only customer details needed to serve the order, restrict access, and handle them securely. Request marketing permission where required; do not add customers to promotional lists without consent."],
    practice: ["Write friendly reply templates for product questions, delivery estimates, COD confirmation, late delivery, and return requests.", "Design a simple customer log with order ID, support issue, resolution, feedback, and follow-up permission—avoid unnecessary sensitive data.", "Choose three service measures, such as response time, delivery success, and complaint resolution, and review them each week."],
    resourceKeys: ["whatsapp", "meta-business", "daraz", "pta", "consumer"]
  }
];

window.kpiLocalLessons = lessons;

const lessonGuides = [
  [
    ["Choose a customer group such as home cooks or students; name one online purchase they make.", "Compare business-to-customer, business-to-business, consumer-to-consumer, and social commerce examples.", "Sketch a simple order journey from discovery to delivery and customer support."],
    ["Choose a city or delivery area and note which courier services customers can access.", "Compare local COD/card options with international payment, shipping, and customs requirements.", "List the extra costs, delivery time, and legal checks an international order could add."],
    ["For reselling, compare two wholesalers and calculate the cash needed for a small test batch.", "For dropshipping, ask who owns stock, dispatches it, handles returns, and pays for failed deliveries.", "For private label, list sample, branding, minimum-order, quality-control, and inventory costs."],
    ["Open Shopify's learning site and note store subscription, domain, payment, and delivery setup steps.", "Visit Daraz Seller Center and review seller registration, listing, fees, and marketplace policies.", "Review WooCommerce setup needs: WordPress, hosting, updates, payment, and courier integration."],
    ["Select a Pakistani customer segment and interview at least five people about one shopping problem.", "Compare customer reviews, delivery promises, payment choices, and competing prices on local marketplaces.", "Check current business, consumer, tax, and payment requirements with relevant official sources."],
    ["Write a cost sheet with setup expenses, recurring fees, and the full cost of one delivered order.", "Estimate break-even orders: monthly fixed costs divided by contribution per order.", "Set a small validation budget and a stop-loss before you purchase stock or pay for ads."]
  ],
  [
    ["Pick a customer group and list ten products that solve an identifiable need for them.", "Score each idea for demand evidence, competition, sourcing, delivery ease, quality risk, and margin.", "Select two ideas for more research; do not treat social views alone as proof of buying demand."],
    ["Read local marketplace reviews and social comments; record repeated questions and complaints.", "Check whether the product can be explained clearly, photographed accurately, and delivered safely.", "Ask potential customers what they currently use and what they would realistically pay."],
    ["Save five competing listings and record price, offer, delivery estimate, ratings, and review dates.", "Compare product quality, claims, imagery, return terms, and unanswered customer questions.", "Identify a specific way to improve the offer instead of competing on price alone."],
    ["Search your product terms in Google Trends and set Pakistan plus a useful time range.", "Compare related search terms and inspect whether interest is steady, seasonal, or a short spike.", "Cross-check the pattern with marketplace listings and recent customer activity before buying stock."],
    ["Enter sale price, supplier cost, inbound freight, duties/taxes, packaging, and courier cost in the calculator.", "Add realistic ad/platform charges and an allowance for cancelled or returned COD orders.", "Test alternative sale prices; proceed only if contribution remains acceptable after variable costs."],
    ["Mark likely seasonal peaks using trend history, weather, school dates, and local events.", "Look for durable problem-solving demand rather than copying a momentary viral post.", "Plan a limited test and a sell-through target before placing a larger seasonal order."]
  ],
  [
    ["Search local manufacturer directories, wholesale markets, trade fairs, and verified business referrals.", "Request the supplier's business identity, location, contact details, current stock, and written quotation.", "Compare at least three suppliers using the same product specification and quantity."],
    ["Use marketplace listings to discover vendors, then contact them to confirm wholesale terms directly.", "Ask for current photos/video, exact specifications, defect policy, dispatch time, and sample availability.", "Save invoices, messages, sample results, and agreed terms in a supplier record."],
    ["Search Alibaba using exact specifications and compare supplier history, verified details, and terms.", "Request a sample and a written quote including MOQ, Incoterm, lead time, packaging, and payment terms.", "Keep communication and payment on approved platform channels where available; independently verify claims."],
    ["Check the legal business identity and contact details through independent channels.", "Order and inspect a sample against written dimensions, materials, color, function, and packaging.", "Agree in writing on acceptable defect rates, inspection, replacement, refund, and dispute process."],
    ["Ask for the MOQ at each price tier and calculate the full cash commitment at each quantity.", "Compare the MOQ with storage, expiry/damage risk, cash flow, and realistic expected monthly sales.", "Request a smaller trial order or mixed variants; do not borrow for stock based only on a unit discount."],
    ["Ask for separate sample, freight, insurance, packaging, and delivery charges in writing.", "For imports, confirm current classification, import permissions, duties, and taxes with FBR/PSW or a qualified agent.", "Compare final landed cost, production timeline, payment milestones, and defect remedies before confirming."]
  ],
  [
    ["Create a Shopify account through the official site and choose an available trial/plan after checking current pricing.", "Set store name, currency, business details, and basic theme; connect a domain when ready.", "Configure payment and delivery options available to your business, then place a test order before launch."],
    ["Choose a marketplace for its audience and understand fees, seller rules, and account requirements first.", "For WooCommerce, arrange WordPress hosting, install WooCommerce, and configure currency, tax, and shipping.", "Compare platform ownership, monthly costs, checkout, local payment support, and maintenance needs."],
    ["Brainstorm a short, memorable brand name and check domain availability and potential conflicts.", "Register the domain through a reputable registrar and enable renewal and account security.", "Use one consistent logo, color palette, business name, and support contact across store and social pages."],
    ["Prepare bright, accurate product photos from multiple angles; include scale or dimensions where useful.", "Write a plain-language title, specifications, included items, benefits, care, stock, and honest limitations.", "Set a tested price, variant stock, and delivery charge; review the listing on a phone before publishing."],
    ["Create a short menu with clear categories; keep important products and policies easy to find.", "Build the product page with price, availability, photos, delivery estimate, returns, and contact details.", "Test navigation, add-to-cart, checkout, order confirmation, and all links on both mobile and desktop."],
    ["Write delivery, cancellation, return/refund, privacy, and contact pages that match your actual operations.", "Check marketplace requirements and applicable Pakistani consumer/privacy rules before publishing policies.", "Place a test order, verify notifications and courier workflow, correct issues, then announce the store."]
  ],
  [
    ["COD means the buyer pays the courier when the parcel is delivered; ask who collects, remits, and deducts fees.", "Map the cash flow: order booked → delivered/collected → courier settlement → bank receipt → reconciliation.", "Confirm current COD availability, fees, settlement schedule, and service terms with each courier."],
    ["Compare two or three couriers on service area, COD charges, parcel limits, RTO charges, and settlement time.", "Prepare commonly requested business details: owner/contact, business name/address, ID and bank details; ask the courier which documents are actually required for your account type.", "Start signup only from the courier's official website/business contact or a verified branch; request written account-opening instructions.", "Submit the application and only the documents the courier confirms it requires; never send OTPs or banking passwords.", "Ask the courier to confirm account activation, merchant/customer code, booking method, pickup process, and support contact in writing.", "Get the complete rate card: city/zone, weight slabs, COD fee, fuel/remote-area charges, taxes, RTO, reattempts, and claim rules.", "Confirm how often COD is paid, minimum settlement if any, bank details process, statement format, and dispute deadline.", "Book one low-risk test shipment, track it to completion, verify the COD remittance and deductions, and save the evidence before scaling."],
    ["Package and weigh the parcel, then confirm the courier's actual and volumetric-weight rules.", "Book in the courier's approved merchant portal/app or with its authorized pickup process; enter a verified address and COD amount.", "Write down the tracking/consignment number and share it with the customer using an approved contact channel.", "Check tracking after pickup and follow up on exceptions through the courier's official support channel."],
    ["Choose packaging that protects the item; seal it securely and attach a legible label without covering barcodes.", "Confirm chargeable weight, delivery fee, COD fee, and any remote-area surcharge before dispatch.", "Ask the courier for written RTO definitions, return charges, reattempt rules, and damaged/lost parcel claims.", "Photograph the packed parcel and retain order details and booking receipt until reconciliation is complete."],
    ["Before dispatch, confirm recipient name, reachable phone, city, complete address, landmark, item/variant, and total COD.", "Ask the customer to confirm someone can receive the parcel and the expected delivery window.", "Track failed attempts promptly; contact the customer politely to correct the address or agree a reattempt.", "Record cancellation, refusal, unreachable number, and RTO reasons so you can reduce repeat problems."],
    ["Download the courier's delivered-order and COD settlement statements for the same date range.", "Match each order ID/tracking number to delivered COD, courier fee, RTO deductions, and settlement reference.", "Compare the expected net amount with the bank credit; flag missing or incorrect orders within the courier's dispute window.", "Record unresolved amounts and evidence; close a period only when statement totals reconcile with bank receipts."]
  ],
  [
    ["Choose one channel where your customers already spend time; start with useful organic content.", "Set a goal such as reach, qualified visits, leads, or purchases and match each post/ad to that goal.", "Record baseline visits and delivered orders so you can compare marketing results later."],
    ["Create or secure a Meta business presence using official account setup and enable two-factor authentication.", "Complete the page profile, contact details, product destination, and policy links before advertising.", "Check current ad policies and pixel/conversion tracking; test the destination page and event before spending."],
    ["Choose TikTok for short-form video discovery, Google for intent-led searches, or YouTube for demonstrations.", "Use each platform's official academy to learn account setup, eligibility, formats, and current policies.", "Start with one channel and one clear campaign objective rather than splitting a small budget everywhere."],
    ["Create business pages with an accurate brand name, logo, contact path, and consistent information.", "Use official account creation routes, a business-owned email, strong password, and two-factor authentication.", "Limit staff access by role; never share passwords or verification codes with a freelancer or caller."],
    ["Define a real customer segment and choose targeting you can explain; avoid unsupported sensitive targeting.", "Set a daily/total spend cap and campaign end date before publishing.", "Preview the ad on mobile, confirm landing-page links and policies, then use the platform review process."],
    ["Use tracked links and correctly configured analytics/pixel events; test events before launch.", "Track impressions, clicks, visits, orders, spend, delivered orders, cancellations, and revenue.", "Review CPA and ROAS together with contribution after fees, fulfilment, returns, and failed COD deliveries."]
  ],
  [
    ["Film the actual product in clear light and show scale, how it works, and what is included.", "Create one clean product image and one short vertical demonstration with readable captions.", "Check color, sizing, performance claims, music rights, and ad-platform creative requirements."],
    ["Open Canva and select the correct social placement/size; start with a readable product-first layout.", "Use an approved, accurate product photo and keep text, logo, price, and call-to-action legible on a phone.", "Use AI only to help brainstorm or draft; fact-check every claim and do not fabricate product imagery or reviews."],
    ["Write a hook that names a relevant customer problem without promising guaranteed outcomes.", "Add one specific, verifiable product benefit and concise evidence or demonstration.", "Finish with a clear call to action and make the destination page repeat the same offer and terms."],
    ["Test one change at a time, such as the first line or opening image; keep audience and budget comparable.", "Choose a primary metric and minimum test duration before launch; record results without cherry-picking.", "Retarget only eligible, consented audiences under current platform rules and exclude irrelevant purchasers."],
    ["Set a fixed spend ceiling and end date that you can afford before running a test.", "Test a small number of distinct creative ideas with the same offer and destination.", "Pause based on your prewritten loss limit or delivery issue; do not increase budget on early clicks alone."],
    ["Calculate ROAS as attributed revenue ÷ ad spend and CPA as ad spend ÷ attributed conversions.", "Calculate conversion rate as purchases ÷ relevant visits and report delivered orders separately from placed COD orders.", "Compare these measures with per-order contribution, refunds, fees, and RTO costs before making changes."]
  ],
  [
    ["Set a realistic response-time target and check messages during stated support hours.", "Use a short greeting, answer the specific question, and provide verified price, stock, delivery, and return terms.", "Keep customer conversation respectful and move order details into a secure, access-limited record."],
    ["Send a concise confirmation request containing product/variant, quantity, total due, address, and expected delivery window.", "Wait for the customer to confirm the order and a reachable phone/address before booking COD.", "Record confirmation and any requested changes; cancel or correct unconfirmed orders under your stated policy."],
    ["Let the customer explain their concern without interruption; repeat the key issue to confirm understanding.", "Respond with accurate information and offer realistic options, cost, and timing—never pressure or invent scarcity.", "Escalate payment, product-safety, privacy, and unresolved delivery disputes to the responsible person."],
    ["Publish a clear cancellation/returns route and response timeframe consistent with law and marketplace policy.", "Record the order, issue, evidence, customer preference, and agreed next action.", "Inspect a return fairly and provide the promised refund/replacement update; use feedback to prevent repeats."],
    ["Send accurate order and tracking updates and resolve delivery problems proactively.", "After resolution, ask for feedback or a review without incentives that violate platform rules.", "Invite repeat purchases only with appropriate permission and an easy way to stop messages."],
    ["Record only information needed for the order: order reference, contact/address for fulfilment, and service status.", "Restrict access, avoid public/shared spreadsheets, secure devices, and remove records when no longer needed.", "Review response time, delivery success, repeat orders, and complaint resolution weekly without exposing customer data."]
  ]
];

const topicExplanations = [
  [
    "E-commerce means buying or selling products and services through the internet. Common forms include brands selling to people, businesses ordering from businesses, consumer resale, and social commerce.",
    "Local e-commerce serves customers within Pakistan; cross-border selling additionally involves international shipping, foreign payment methods, customs, taxes, longer delivery windows, and destination-country rules.",
    "Reselling means buying stock to sell again; dropshipping means a supplier fulfils the order; private label means selling a product under your own brand. The models differ in investment, control, and responsibility.",
    "Shopify is a hosted store platform, Daraz is a marketplace, and WooCommerce is store software commonly used with WordPress. Compare costs, traffic, local payment options, courier compatibility, and maintenance.",
    "Pakistan's market includes marketplace, independent-store, and social-commerce shoppers with different trust, language, delivery, and payment preferences. Validate demand with real customers and current market evidence.",
    "Profit is not guaranteed: include stock, fulfilment, platform, advertising, tax, returns, and overhead costs. Estimate the cash needed and validate an idea with a small test before scaling."
  ],
  [
    "A niche is a focused customer group and need. Useful product research combines customer conversations, search signals, marketplace evidence, competitor listings, and supplier checks.",
    "A product may suit Pakistani buyers when its value is clear, price is realistic, quality can be verified, and the item can be delivered reliably. Popularity alone is not proof of viable demand.",
    "Competitor analysis compares prices, product claims, photos, delivery promises, reviews, and return terms. Look for customer needs competitors leave unanswered rather than copying a listing.",
    "Google Trends shows relative search interest over time and location; it does not directly report sales. Compare terms and seasons, then verify the signal against other market evidence.",
    "A useful selling price covers product and inbound costs, packaging, courier, marketplace/payment fees, advertising, and expected failed-delivery or return losses, while remaining acceptable to customers.",
    "Seasonal products peak at particular times; trending products can lose interest quickly; problem-solving products answer a durable need. Historical demand helps distinguish these patterns."
  ],
  [
    "Local wholesalers and manufacturers may be found through business referrals, directories, trade markets, industry events, and direct outreach. Verify the business and product before sending money.",
    "Online Pakistani marketplaces can help identify local vendors, but listings do not guarantee wholesale pricing, consistent stock, or quality. Confirm terms directly and order a sample where possible.",
    "International supplier platforms can introduce manufacturers and trading companies. Independently verify supplier identity, product claims, payment protection, shipping terms, and import requirements.",
    "Supplier verification includes checking identity and contact details, inspecting a sample against written specifications, agreeing quality tolerances, and defining how defects or disputes are resolved.",
    "MOQ is the minimum order quantity. A lower per-unit price at a larger MOQ can still be a poor choice if inventory ties up cash or cannot be sold in time.",
    "Landed cost may include samples, freight, insurance, customs duties/taxes, inspection, and damaged units. Get current written quotes and confirm import obligations with the appropriate authorities or a qualified agent."
  ],
  [
    "An online store needs a platform, business identity, products, payments, delivery settings, policies, and testing. Choose a plan only after checking its current pricing and Pakistan support.",
    "Marketplaces bring shoppers under marketplace rules; WooCommerce requires WordPress hosting and upkeep; hosted platforms manage more infrastructure for a recurring fee. Compare total cost and control.",
    "A domain is your web address; branding gives shoppers a consistent name and visual identity. Check domain renewal cost, availability, and possible trademark conflicts before committing.",
    "A product listing should state accurate price, variants, dimensions, materials, included items, stock, delivery information, and honest benefits. Clear images help customers judge the real item.",
    "Simple navigation and a complete product page help shoppers find, evaluate, and buy products. Make categories, checkout, prices, and delivery terms easy to locate on mobile.",
    "Policies explain how your business handles delivery, cancellations, returns, refunds, privacy, and support. Publish terms that match your actual operations and relevant laws/platform rules."
  ],
  [
    "With cash on delivery, the customer pays the courier at delivery. The courier collects the money, deducts applicable charges, then remits the balance on its own schedule and terms.",
    "A courier merchant account typically requires an application and verified merchant/payment details. Exact documents, portals, approval criteria, fees, and settlement schedules vary by courier and account type.",
    "A shipment booking records destination, parcel, and COD amount with the courier. Tracking lets the merchant and customer follow the parcel and respond to delivery exceptions.",
    "Packaging protects the item in transit; delivery cost may depend on destination, weight, dimensions, and service. RTO means a failed delivery is returned to the sender, potentially with charges.",
    "Incomplete addresses and unreachable recipients can cause delays, failed attempts, and RTO. Confirming details with the customer before booking helps prevent avoidable delivery failures.",
    "Reconciliation matches order records and courier statements to delivered COD, fees, returns, and actual bank deposits. Keep tracking references and investigate differences promptly."
  ],
  [
    "Organic marketing builds reach through unpaid content; paid advertising buys distribution. Both rely on a relevant offer, trustworthy landing page, and reliable order fulfilment.",
    "Facebook and Instagram advertising use Meta business tools to publish and measure campaigns. Set up business access securely and follow current advertising and data policies.",
    "TikTok, Google Search, and YouTube reach audiences in different contexts. Choose based on customer behaviour and product fit, then use official platform training and policies.",
    "Business pages and ad accounts represent your business and grant access to campaign tools. Create them through official channels, secure them, and limit account permissions.",
    "Campaign objectives guide what the platform optimizes for; audiences define who may see ads; budgets cap spend. Select each deliberately and define a safe test limit.",
    "Clicks and conversions measure different parts of the customer journey. Track website visits, placed orders, delivered orders, spend, and returns to judge business outcomes."
  ],
  [
    "Product photography, demonstration video, and concise copy help customers understand an offer. Show the real item clearly and avoid claims you cannot prove.",
    "Canva provides design templates and AI tools can assist with brainstorming. Verify details and use accurate product imagery, permissions, and platform-compliant creative.",
    "A hook earns attention, a headline explains the offer, and a call to action tells the customer what to do next. Keep messaging truthful and consistent with the product page.",
    "A/B testing compares controlled versions of an ad; retargeting reaches some previous visitors or engagers. Define a metric first and respect consent, eligibility, and platform rules.",
    "A controlled product test has a fixed spend cap, a specific hypothesis, a short review schedule, and a stop condition. A click spike alone is not evidence to scale.",
    "ROAS compares attributed revenue with ad spend; CPA compares ad spend with acquired conversions; conversion rate relates purchases to visits. Include returns, COD failures, and all variable costs."
  ],
  [
    "Helpful service provides accurate answers through channels customers use. Set response expectations and give clear information about price, stock, delivery, and returns.",
    "COD confirmation checks that the customer ordered the correct item and can receive the parcel at the supplied contact and address before dispatch.",
    "Professional objection handling means understanding the concern, replying with verifiable information, and offering realistic options without pressure or misleading claims.",
    "A documented cancellation, complaint, and return process helps resolve issues fairly and consistently. Follow your published terms, platform rules, and applicable consumer requirements.",
    "Trust grows from honest product information, reliable fulfilment, privacy-conscious service, and effective issue resolution. Repeat orders should be encouraged respectfully and with permission.",
    "Customer records support fulfilment and service but contain personal information. Collect only what is needed, restrict access, protect the records, and track service quality responsibly."
  ]
];

const resources = [
  { name: "Shopify", category: "platforms", label: "STORE PLATFORM", description: "Official store builder guides and learning resources for creating and managing an online store.", url: "https://www.shopify.com/learn", mark: "S" },
  { name: "Daraz Seller Center", category: "platforms", label: "PAKISTAN MARKETPLACE", description: "Seller registration, marketplace policies, product listings, and seller support.", url: "https://sellercenter.daraz.pk/", mark: "D" },
  { name: "WooCommerce", category: "platforms", label: "STORE PLATFORM", description: "Official documentation for building an online shop with WooCommerce and WordPress.", url: "https://woocommerce.com/documentation/", mark: "W" },
  { name: "WordPress", category: "platforms", label: "WEBSITE BUILDER", description: "Learn to build and manage a WordPress website from the official documentation.", url: "https://wordpress.org/documentation/", mark: "P" },
  { name: "Google Trends", category: "research", label: "PRODUCT RESEARCH", description: "Explore search-interest patterns by time and region to investigate product demand.", url: "https://trends.google.com/trends/", mark: "G" },
  { name: "Alibaba.com", category: "research", label: "GLOBAL SOURCING", description: "Discover suppliers and learn how to evaluate products and sourcing options.", url: "https://www.alibaba.com/", mark: "A" },
  { name: "Daraz", category: "research", label: "LOCAL MARKET RESEARCH", description: "Explore local product listings, customer questions, pricing, and competing offers.", url: "https://www.daraz.pk/", mark: "D" },
  { name: "Pakistan Single Window", category: "research", label: "IMPORT & EXPORT", description: "Official portal for information and services related to cross-border trade processes.", url: "https://www.psw.gov.pk/", mark: "P" },
  { name: "FBR Pakistan", category: "operations", label: "TAX & CUSTOMS", description: "Official tax and customs information. Check current requirements for your business and goods.", url: "https://www.fbr.gov.pk/", mark: "F" },
  { name: "State Bank of Pakistan", category: "operations", label: "PAYMENTS & POLICY", description: "Official information about Pakistan's financial system, payment services, and regulations.", url: "https://www.sbp.org.pk/", mark: "S" },
  { name: "TCS Pakistan", category: "operations", label: "COURIER", description: "Explore courier services and contact the provider for current merchant account terms.", url: "https://www.tcsexpress.com/", mark: "T" },
  { name: "Leopards Courier", category: "operations", label: "COURIER", description: "Review available domestic delivery services and ask about current COD arrangements.", url: "https://www.leopardscourier.com/", mark: "L" },
  { name: "Trax", category: "operations", label: "E-COMMERCE LOGISTICS", description: "Explore e-commerce fulfilment and shipping services; confirm coverage and terms directly.", url: "https://trax.pk/", mark: "T" },
  { name: "Pakistan Post", category: "operations", label: "POSTAL SERVICES", description: "Official postal services, product information, and contact details.", url: "https://www.pakpost.gov.pk/", mark: "P" },
  { name: "Meta Business Learn", category: "marketing", label: "SOCIAL ADVERTISING", description: "Official learning resources for Meta business tools, pages, and advertising.", url: "https://www.facebook.com/business/learn", mark: "M" },
  { name: "Meta Ad Library", category: "marketing", label: "COMPETITOR RESEARCH", description: "Search active ads across Meta platforms to understand creative and messaging patterns.", url: "https://www.facebook.com/ads/library/", mark: "M" },
  { name: "TikTok Academy", category: "marketing", label: "VIDEO ADVERTISING", description: "Official courses and resources for TikTok marketing and advertising.", url: "https://www.tiktok.com/business/learning", mark: "T" },
  { name: "Google Ads", category: "marketing", label: "SEARCH & VIDEO ADS", description: "Official guides to campaign setup, audience targeting, measurement, and optimization.", url: "https://skillshop.withgoogle.com/", mark: "G" },
  { name: "YouTube Creators", category: "marketing", label: "YOUTUBE CHANNEL GROWTH", description: "Official creator education for building a channel, creating videos, and reaching an audience.", url: "https://www.youtube.com/creators/", mark: "Y" },
  { name: "Google Analytics", category: "marketing", label: "MEASUREMENT", description: "Official resources for understanding web analytics and measuring customer journeys.", url: "https://analytics.google.com/analytics/academy/", mark: "G" },
  { name: "Canva Design School", category: "marketing", label: "CREATIVE DESIGN", description: "Learn practical graphic design and create product visuals and social media content.", url: "https://www.canva.com/designschool/", mark: "C" },
  { name: "CapCut", category: "marketing", label: "VIDEO CREATION", description: "Video editing tools and tutorials for short-form product demonstrations.", url: "https://www.capcut.com/", mark: "C" },
  { name: "WhatsApp Business", category: "operations", label: "CUSTOMER MESSAGING", description: "Official business messaging app information and features for customer communication.", url: "https://www.whatsapp.com/business/", mark: "W" },
  { name: "Namecheap", category: "platforms", label: "DOMAIN REGISTRATION", description: "Domain search and management; compare renewal prices and terms before purchasing.", url: "https://www.namecheap.com/domains/", mark: "N" },
  { name: "Google Keyword Planner", category: "research", label: "KEYWORD RESEARCH", description: "Explore search terms and planning insights through Google Ads tools.", url: "https://ads.google.com/home/tools/keyword-planner/", mark: "G" }
];

const resourceMap = Object.fromEntries(resources.map((item) => [item.name, item]));
const finalTopicNotes = topicExplanations.map((chapter) => chapter[chapter.length - 1]);
const linkFor = (key) => {
  const aliases = { "meta-library": "Meta Ad Library", "google-keyword": "Google Keyword Planner", "meta-business": "Meta Business Learn", "pakistan-trade": "Pakistan Single Window", "leopards": "Leopards Courier", "tcs": "TCS Pakistan", "trax": "Trax", "post": "Pakistan Post", "sbp": "State Bank of Pakistan", "fbr": "FBR Pakistan", "psw": "Pakistan Single Window", "trends": "Google Trends", "alibaba": "Alibaba.com", "shopify": "Shopify", "daraz": "Daraz Seller Center", "woocommerce": "WooCommerce", "wordpress": "WordPress", "canva": "Canva Design School", "namecheap": "Namecheap", "tiktok": "TikTok Academy", "google-ads": "Google Ads", "youtube": "YouTube Creators", "analytics": "Google Analytics", "capcut": "CapCut", "whatsapp": "WhatsApp Business", "pta": "Pakistan Telecommunication Authority", "consumer": "Competition Commission of Pakistan" };
  const name = aliases[key];
  return resourceMap[name] || { name, url: key === "pta" ? "https://www.pta.gov.pk/" : "https://cc.gov.pk/", description: "Official Pakistan consumer and communications information.", category: "operations", label: "OFFICIAL INFORMATION", mark: "P" };
};

function renderFooter() {
  const footer = document.querySelector(".site-footer");
  if (!footer) return;
  footer.innerHTML = `<div class="footer-inner"><div class="footer-main"><a class="brand footer-brand" href="index.html" aria-label="KPI Learning Platform home"><img class="brand-logo" src="assets/images/KPILogo.png" alt=""><span class="brand-name">KPI Learning<span>LEARNING PLATFORM</span></span></a><p>A learning platform for students of Kurram Polytechnic Institute, Serai Naurang.</p></div><div class="footer-links"><strong>EXPLORE</strong><a href="about.html">About Us</a><a href="courses/dit/index.html">DIT subjects</a><a href="ai-learning/index.html">AI E-Commerce Academy</a><a href="curriculum.html">Curriculum</a><a href="resources.html">Helpful resources</a></div><div class="footer-contact"><strong>KPI · CONTACT &amp; SOCIAL</strong><a href="tel:+923119095542">Institute phone: +92 311 9095542</a><a href="https://wa.me/923119095542" target="_blank" rel="noopener noreferrer">KPI WhatsApp ↗</a><a href="https://www.facebook.com/kpisng/" target="_blank" rel="noopener noreferrer">KPI Facebook ↗</a><a href="https://www.google.com/maps/search/?api=1&amp;query=Kurram+Polytechnic+Institute+Serai+Naurang" target="_blank" rel="noopener noreferrer">Main GT Road, opposite Freshway Bakery, Sabzi Mandi Branch, Serai Naurang ↗</a><a href="tel:+923029382306">Instructor: +92 302 9382306</a><a href="mailto:abidmehmoodpk25@gmail.com">abidmehmoodpk25@gmail.com</a><span>Abid Mehmood</span></div></div><div class="footer-bottom"><span>© 2026 Abid Mehmood. Learn at your own pace.</span><a href="#top" class="back-top">Back to top ↑</a></div>`;
  const footerBrand = footer.querySelector(".footer-brand");
  const description = footer.querySelector(".footer-main p");
  if (!footerBrand || !description) return;
  const portrait = document.createElement("figure");
  portrait.className = "footer-educator";
  portrait.innerHTML = '<img src="assets/images/about-abid.png" alt="Abid Mehmood" loading="lazy"><figcaption><strong>Abid Mehmood</strong><span>Programmer · Web Designer · DIT Instructor</span></figcaption>';
  description.insertAdjacentElement("beforebegin", portrait);
}

function renderBrandIdentity() {
  document.querySelectorAll(".site-header .brand").forEach((brand) => {
    brand.setAttribute("aria-label", "KPI Learning Platform home");
    brand.innerHTML = `<img class="brand-logo" src="assets/images/KPILogo.png" alt=""><span class="brand-name">KPI Learning<span>LEARNING PLATFORM</span></span>`;
  });
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
    favicon.href = "assets/images/KPILogo.png";
    favicon.type = "image/png";
  }
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = "#ed1c24";
  document.title = document.title.replace(/AI Powered E-Commerce( Academy)?/g, "KPI Learning Platform");
}

function renderSteps() {
  const home = document.querySelector("#home-steps");
  if (home) home.innerHTML = lessons.map((lesson, index) => `<a class="step-card" href="lesson-${String(index + 1).padStart(2, "0")}.html"><div class="step-card-top"><span class="step-icon">${lesson.icon}</span><span class="step-number">STEP ${String(index + 1).padStart(2, "0")}</span></div><h3>${lesson.title}</h3><p>${lesson.short}</p><span class="card-link">Explore lesson <b>↗</b></span></a>`).join("");
  const list = document.querySelector("#curriculum-list");
  if (list) list.innerHTML = lessons.map((lesson, index) => `<a class="curriculum-item" href="lesson-${String(index + 1).padStart(2, "0")}.html"><span class="curriculum-icon">${lesson.icon}</span><span class="curriculum-text"><span class="step-number">STEP ${String(index + 1).padStart(2, "0")}</span><strong>${lesson.title}</strong><small>${lesson.short}</small></span><span class="topic-count">${lesson.topics.length} topics</span><span class="curriculum-arrow">↗</span></a>`).join("");
}

function renderResources(filter = "all") {
  const grid = document.querySelector("#resource-grid");
  if (!grid) return;
  const shown = filter === "all" ? resources : resources.filter((item) => item.category === filter);
  grid.innerHTML = shown.map((item) => `<a class="resource-card" href="${item.url}" target="_blank" rel="noopener noreferrer"><span class="resource-logo">${item.mark}</span><span class="resource-label">${item.label}</span><strong>${item.name}</strong><p>${item.description}</p><span class="resource-visit">Visit website <b>↗</b></span></a>`).join("");
}

function renderLesson() {
  const target = document.querySelector("#lesson-content");
  if (!target) return;
  const index = Number(document.body.dataset.lesson) - 1;
  const lesson = lessons[index];
  if (!lesson) return;
  const number = String(index + 1).padStart(2, "0");
  const previous = index > 0 ? `<a class="lesson-nav-link previous" href="lesson-${String(index).padStart(2, "0")}.html"><span>← PREVIOUS</span><strong>${lessons[index - 1].title}</strong></a>` : `<a class="lesson-nav-link previous" href="curriculum.html"><span>← CURRICULUM</span><strong>All learning steps</strong></a>`;
  const next = index < lessons.length - 1 ? `<a class="lesson-nav-link next" href="lesson-${String(index + 2).padStart(2, "0")}.html"><span>NEXT STEP →</span><strong>${lessons[index + 1].title}</strong></a>` : `<a class="lesson-nav-link next" href="curriculum.html"><span>FINISH</span><strong>Review all lessons ↗</strong></a>`;
  const links = lesson.resourceKeys.map((key) => {
    const item = linkFor(key);
    return `<a class="lesson-resource" href="${item.url}" target="_blank" rel="noopener noreferrer"><span class="resource-logo">${item.mark}</span><span><strong>${item.name}</strong><small>${item.label}</small></span><b>↗</b></a>`;
  }).join("");
  const tasks = lesson.practice.map((task) => `<li><span class="task-check">✓</span><span>${task}</span></li>`).join("");
  target.innerHTML = `<section class="lesson-hero page-width"><a class="breadcrumb" href="curriculum.html">← All learning steps</a><div class="eyebrow">PRACTICAL LEARNING PATH <span>·</span> STEP ${number} OF 08</div><h1>${lesson.title}</h1><p>${lesson.short}</p><div class="lesson-tags"><span>◷ Self-paced</span><span> Practical focus</span><span>⌖ Pakistan context</span></div><div class="lesson-progress"><span style="width:${(index + 1) * 12.5}%"></span></div></section><section class="lesson-layout page-width"><aside class="lesson-sidebar"><div class="sidebar-card"><span class="sidebar-heading">IN THIS LESSON</span><ol>${lesson.topics.map((topic, i) => `<li><a href="#topic-${i + 1}"><span>${String(i + 1).padStart(2, "0")}</span>${topic}</a></li>`).join("")}<li><a href="#practice"><span>✳</span>Put it into practice</a></li></ol></div><div class="sidebar-card sidebar-links"><span class="sidebar-heading">USEFUL LINKS</span>${links}</div></aside><article class="lesson-article"><div class="lesson-article-head"><span class="lesson-big-icon">${lesson.icon}</span><div><span class="step-number">STEP ${number}</span><h2>Let's break it down.</h2></div></div><div class="topic-list">${lesson.topics.map((topic, i) => `<section class="topic-block" id="topic-${i + 1}"><h3><span>${String(i + 1).padStart(2, "0")}</span>${topic}</h3><p>${lesson.explain[i] || finalTopicNotes[index]}</p></section>`).join("")}</div>${lesson.calculator ? `<section class="calculator-card"><div class="eyebrow">TRY THE NUMBERS</div><h3>Quick product margin check</h3><p>Estimate contribution per order. Replace the example with your own PKR costs; this is a planning aid, not a profit guarantee.</p><div class="calculator-grid"><label>Selling price (PKR)<input type="number" min="0" id="price" value="2500"></label><label>Product cost (PKR)<input type="number" min="0" id="product-cost" value="850"></label><label>Delivery + packaging (PKR)<input type="number" min="0" id="delivery-cost" value="300"></label><label>Ads + fees + returns (PKR)<input type="number" min="0" id="other-cost" value="500"></label></div><button type="button" class="button button-primary calculator-button" id="calculate">Calculate estimate</button><output class="calculator-result" id="calc-result" aria-live="polite">Estimated contribution: PKR 850 (34.0%)</output></section>` : ""}<section class="practice-card" id="practice"><div class="eyebrow">YOUR TURN</div><h2>Put it into practice.</h2><p>Small, practical actions make the learning stick. Save your notes as you go.</p><ul>${tasks}</ul><a class="button button-dark" href="resources.html">Explore the resource library <span>↗</span></a></section><nav class="lesson-navigation" aria-label="Lesson navigation">${previous}${next}</nav></article></section>`;
  target.innerHTML = `<section class="lesson-hero page-width"><a class="breadcrumb" href="curriculum.html">← All learning steps</a><div class="eyebrow">PRACTICAL LEARNING PATH <span>·</span> STEP ${number} OF 08</div><h1>${lesson.title}</h1><p>${lesson.short}</p><div class="lesson-tags"><span>◷ Self-paced</span><span> Practical focus</span><span>⌖ Pakistan context</span></div><div class="lesson-progress"><span style="width:${(index + 1) * 12.5}%"></span></div></section><section class="lesson-layout page-width"><aside class="lesson-sidebar"><div class="sidebar-card"><span class="sidebar-heading">IN THIS LESSON</span><ol>${lesson.topics.map((topic, i) => `<li><a href="#topic-${i + 1}"><span>${String(i + 1).padStart(2, "0")}</span>${topic}</a></li>`).join("")}<li><a href="#practice"><span>✳</span>Put it into practice</a></li></ol></div><div class="sidebar-card sidebar-links"><span class="sidebar-heading">USEFUL LINKS</span>${links}</div></aside><article class="lesson-article"><div class="lesson-article-head"><span class="lesson-big-icon">${lesson.icon}</span><div><span class="step-number">STEP ${number}</span><h2>Let's break it down.</h2></div></div><div class="topic-list">${lesson.topics.map((topic, i) => `<section class="topic-block" id="topic-${i + 1}"><h3><span>${String(i + 1).padStart(2, "0")}</span>${topic}</h3><p>${lesson.explain[i] || ""}</p></section>`).join("")}</div>${lesson.calculator ? `<section class="calculator-card"><div class="eyebrow">TRY THE NUMBERS</div><h3>Quick product margin check</h3><p>Estimate contribution per order. Replace the example with your own PKR costs; this is a planning aid, not a profit guarantee.</p><div class="calculator-grid"><label>Selling price (PKR)<input type="number" min="0" id="price" value="2500"></label><label>Product cost (PKR)<input type="number" min="0" id="product-cost" value="850"></label><label>Delivery + packaging (PKR)<input type="number" min="0" id="delivery-cost" value="300"></label><label>Ads + fees + returns (PKR)<input type="number" min="0" id="other-cost" value="500"></label></div><button type="button" class="button button-primary calculator-button" id="calculate">Calculate estimate</button><output class="calculator-result" id="calc-result" aria-live="polite">Estimated contribution: PKR 850 (34.0%)</output></section>` : ""}<section class="practice-card" id="practice"><div class="eyebrow">YOUR TURN</div><h2>Put it into practice.</h2><p>Small, practical actions make the learning stick. Save your notes as you go.</p><ul>${tasks}</ul><a class="button button-dark" href="resources.html">Explore the resource library <span>↗</span></a></section><nav class="lesson-navigation" aria-label="Lesson navigation">${previous}${next}</nav></article></section>`;
  target.querySelectorAll(".topic-block").forEach((topic, topicIndex) => {
    const description = topic.querySelector("p");
    description.textContent = topicExplanations[index][topicIndex];
    const heading = document.createElement("h4");
    heading.className = "topic-steps-heading";
    heading.textContent = "STEP-BY-STEP GUIDE";
    const orderedSteps = document.createElement("ol");
    orderedSteps.className = "topic-steps";
    lessonGuides[index][topicIndex].forEach((step) => {
      const item = document.createElement("li");
      item.textContent = step;
      orderedSteps.append(item);
    });
    topic.append(heading, orderedSteps);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const courseDirectory = document.createElement("script");
  courseDirectory.src = "assets/js/course-directory.js";
  document.head.append(courseDirectory);
  renderBrandIdentity();
  renderFooter();
  renderSteps();
  renderResources();
  renderLesson();
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav && toggle.dataset.menuBound !== "true") {
    toggle.dataset.menuBound = "true";
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      toggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
      nav.classList.toggle("is-open", !expanded);
    });
  }
  document.querySelectorAll(".filter-chip").forEach((chip) => chip.addEventListener("click", () => {
    document.querySelector(".filter-chip.active")?.classList.remove("active");
    chip.classList.add("active");
    renderResources(chip.dataset.filter || "all");
  }));
  const calculate = document.querySelector("#calculate");
  if (calculate) calculate.addEventListener("click", () => {
    const price = Number(document.querySelector("#price").value) || 0;
    const costs = ["#product-cost", "#delivery-cost", "#other-cost"].reduce((sum, selector) => sum + (Number(document.querySelector(selector).value) || 0), 0);
    const contribution = price - costs;
    const margin = price > 0 ? (contribution / price) * 100 : 0;
    document.querySelector("#calc-result").textContent = `Estimated contribution: PKR ${contribution.toLocaleString("en-PK")} (${margin.toFixed(1)}%)`;
  });
});
