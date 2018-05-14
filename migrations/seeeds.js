'use strict';
moduale.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("UserPosts", [{
                title: "Ancil Hoffman Park",
                category: "Outdoors",
                address: "6700 Tarshes Dr, Carmichael, CA 95608",
                description: "Lots of open space and river access. A beautiful spot in Sacramento.",
                image: "http://www.regionalparks.saccounty.net/Parks/PublishingImages/AmericanRiverParks/AncilHoffoptimized2.jpg"
            }, {
                title: "Cosumnes River Preserve",
                category: "Outdoors",
                address: "3501 Franklin Blvd, Galt, CA 95632",
                description: "The Cosumnes River Preserve encompasses and protects thousands of acres of wetlands and adjacent uplands.",
                image: "https://media-cdn.tripadvisor.com/media/photo-s/0b/19/4d/1e/scenic-walkway.jpg"

            },
            {
                title: "Deer Creek Hills",
                category: "Outdoors",
                address: "Latrobe Rd, Sloughhouse, CA 95683",
                description: "Deer Creek Hills' 4,060 acres of rolling grasslands and oak woodland preserves the heritage of working ranches and provides endless opportunities for public recreation.",
                image: "https://www.ranchomurieta.com/files/deercreekhills-svc-LG.jpg"
            },
            {
                title: "Deer Creek Hills",
                category: "Outdoors",
                address: "Latrobe Rd, Sloughhouse, CA 95683",
                description: "Deer Creek Hills' 4,060 acres of rolling grasslands and oak woodland preserves the heritage of working ranches and provides endless opportunities for public recreation.",
                image: "https://www.ranchomurieta.com/files/deercreekhills-svc-LG.jpg"
            },
            {
                title: "Discovery Park ​",
                category: "Outdoors",
                address: "1600 Garden Hwy, Sacramento, CA 95833",
                description: "Discovery Park is where the American River meets the Sacramento River. One of Sacramento County’s best boat launches, recreational boaters get the chance to explore both of Sacramento’s wild and scenic rivers.",
                image: "http://3.bp.blogspot.com/-GB0rcLLqBWg/UpkxQOW5-yI/AAAAAAAAI3k/G-VWU_CxbTg/s1600/2013_1117_008.jpg"
            },
            {
                title: "Discovery Park",
                category: "Outdoors",
                address: "1600 Garden Hwy, Sacramento, CA 95833",
                description: "Discovery Park is where the American River meets the Sacramento River. One of Sacramento County’s best boat launches, recreational boaters get the chance to explore both of Sacramento’s wild and scenic rivers.",
                image: "http://3.bp.blogspot.com/-GB0rcLLqBWg/UpkxQOW5-yI/AAAAAAAAI3k/G-VWU_CxbTg/s1600/2013_1117_008.jpg"
            },
            {
                title: "Effie Yeaw Nature Center",
                category: "Outdoors",
                address: "2850 San Lorenzo Way, Carmichael, CA 95608",
                description: "The Effie Yeaw Nature Center is an award-winning environmental and cultural education center located within the beautiful American River Parkway in Carmichael, California. The Nature Center is currently operated by the American River Natural History Association.",
                image: "https://cms.capitoltechsolutions.com/clientData/EffieYeaw/lupine%20and%20poppies.jpg"

            },
            {
                title: "Mural by Lopan and Ernie Fresh",
                category: "Art",
                address: "1103 No. B St.",
                description: "Lopan (Neal Bergmann) and Ernie Fresh (Ernie Upton) grew up painting together, and doing graffiti art since the mid-1990s. They combine anime & graffiti art styles to create vivid pop art imagery using a mix of spray paint and brush painting techniques.",
                image: "https://www.newsreview.com/imager/wide-open-walls-art-in/b/original/24711295/0b4b/cover1-6.jpg"
            },
            {
                title: "Mural by Askew",
                category: "Art",
                address: "116 North 16th St..",
                description: "Askew One (Elliot O’Donnell) is a self-taught multi-disciplinary artist who, from his roots in Auckland’s graffiti scene during the early 90’s, became one of the key figures known internationally from the region.",
                image: "https://media.bizj.us/view/img/10578256/dsc5123a.jpg"
            },
            {
                title: "Mural by Raphael Delgado",
                category: "Art",
                address: "1413 21st St.",
                description: "Raphael Delgado is a Northern California based artist whose work explores a broad range of styles and mediums. He is widely recognized throughout the Sacramento area for his unique approach to contemporary art through painting, sculpture, and most recently, costume design and performance art.",
                image: "https://d1jxr8mzr163g2.cloudfront.net/54863527-93a7-47a2-b459-30e3d740842a/814d5bf5-0635-4fe0-8074-253b54c99a33_l.jpg"
            },
            {
                title: "Mural by Kinetic Ideas AKA Anthony Padilla",
                category: "Art",
                address: "1716 L St.",
                description: "Kinetik Ideas (Anthony Padilla) is a prolific Sacramento-based artist that started drawing and painting before preschool. His aunt enrolled him in airbrush lessons at 12, and when he was 14 he picked up a spray can and found freedom of motion.",
                image: "http://www.sacbee.com/entertainment/arts-culture/l0toal/picture168009112/alternates/FREE_1140/Kinetik%20Ideas%20mural"

            },
            {
                title: "Free Museum Day",
                category: "Events",
                address: "Varies",
                description: "This free attraction in Sacramento happens every February. The annual date is always on the first or second Saturday of the month.",
                image: "http://www.latimes.com/resizer/5_gZCAURKAuWUwlXoYZejdVKGp8=/1400x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/ZOS42BTD6VHSHOLSADBYA2HE4Y.jpg"
            },
            {
                title: "Historic City Cemetery",
                category: "Events",
                address: "1000 Broadway, Sacramento, CA 95818",
                description: "Cemeteries are just plain fun. They’re spooky, historic and full of nooks and crannies to explore. The Sacramento Historic City Cemetery is no exception, as it’s lined with gorgeous statues and well-kept gardens",
                image: "https://4.bp.blogspot.com/-lU0gdnLHIMQ/Vy0XkcG67iI/AAAAAAAAIG4/mtl5kZBKSuQhURgIxTsBI05JI0EROuw1ACLcB/s1600/f1381cc358984c8122be1831407cb043.JPG"

            },
            {
                title: "Jelly Belly Factory",
                category: "Events",
                address: "1 Jelly Belly Ln, Fairfield, CA 94533",
                description: "On the Jelly Belly factory tour, you can watch Jelly Belly candies being made. How fun is that?",
                image: "https://i2.wp.com/rvlife.com/wp-content/uploads/2012/07/www.rvlife.com_images_944_BeanBoozled.jpg?resize=350%2C263"

            },
            {
                title: "Second Saturday Art Walk",
                category: "Events",
                address: "Varies",
                description: "Every second Saturday of the month, Sacramento art galleries stay open late and invite guests to view their pieces for free.",
                image: "http://neighborhoods.org/wp-content/uploads/2009/05/sacramento_midtown.jpg"

            },
            {
                title: "American River Bike Trail",
                category: "Events",
                address: "Varies",
                description: "Sacramento is home to many cycling events and trails, and the American River Bike Trail is one of the most beautiful. Also known as the Jedediah Smith Memorial Trail, it begins at Discovery Park in Old Sacramento and ends at Beal’s Point near Folsom Lake.",
                image: "https://alchemyrider.files.wordpress.com/2016/04/american-river-bike-trail-1.jpg?w=610"

            }
        ])
    },
    down: (queryInterface, Sequelize) => {
        queryInterface.bulkDelete("UserPosts", null, {})

    }
}