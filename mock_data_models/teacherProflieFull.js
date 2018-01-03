/**
 * Created by kennyrocker on 12/27/2017.
 */

 var teacherProfileFullJSON = {

    "id"        		: "101",
    "userName" 			: "John Doh",
    "gender"  			: "Male",
    "age"  				: "60",
    "websiteUrl"  		: "www.dohArt.org",
    "contactPhone"  	: "2046709394",
    "contactEmail"  	: "jdoh@dohCanTeach.org",
    "primaryAddress"  	: "305 230 John St",
    "city"              : "North York",
    "province"         : "ON",
    "postalCode"        : "M4W5X2",



    "qualifications"		: {

        "specialty" : "Visual Art, Drawing and Painting",
        "education"	: "BFA OCA",
        "experience" : [
            {
                "title"  		: "Visual Art Instructor",
                "institution"  : "St Peter Secondary School",
                "timeFrom"      : "09/01/1976",
                "timeTo"		: "01/30/2010"
            }
        ],
        "reference" : {

            "image" : [
                {
                    "url"  : "101/image/gallery1.jpg"
                },
                {
                    "url"  : "101/image/gallery2.jpg"
                },
                {
                    "url"  : "101/image/gallery3.jpg"
                }
            ],

            "video" : [
                {
                    "url"  : "101/video/classVideo1.mpeg"
                },
                {
                    "url"  : "101/video/classVideo2.mpeg"
                }
            ],

            "externalLink" : [
                {
                    "url"  : "https://www.blogTo.com/artclassReviews.html"
                }
            ]
        }
    },



    "classes" 			: [
        {
            "id" 				: "10101",
            "name"				: "Oil Painting",
            "description" 		: "Advance oil painting for North York Korean community",
            "level"         	: "advance",
            "language"    		: "Korean",
            "price"       		: "450",
            "studentAge"    	: "18",
            "classSize"     	: "10",
            "isSupplyProvided"	: "false",
            "supplyCost"		: "100",
            "isPrimaryAddress"	: "true",
            "address"  			: "",
            "city"				: "",
            "province"     	    : "",
            "postalCode"    	: "",
            "startDate"     	: "03/04/2018",
            "duration"      	: "4 weeks",
            "expired"			: "false",

            "schedule" : [
                {
                    "date"  	: "Monday",
                    "timeFrom"  : "3pm",
                    "timeTo"    : "4pm"
                },
                {
                    "date"  	: "Thursday",
                    "timeFrom"  : "5pm",
                    "timeTo"    : "7pm"
                }
            ]
        },

        {
            "id" 				: "10102",
            "name"		 		: "Drawing",
            "description"		: "Teen Drawing, fun week day after school program",
            "language"    		: "English",
            "price"       		: "300",
            "level"         	: "beginner",
            "studentAge"    	: "6",
            "classSize"     	: "25",
            "isSupplyProvided"	: "true",
            "supplyCost"		: "0",
            "isPrimaryAddress"	: "false",
            "address"  			: "30 TownCenter Rd",
            "city"				: "Scarborough",
            "province"     	    : "ON",
            "postalCode"    	: "L3R0V4",
            "startDate"     	: "03/05/2018",
            "duration"      	: "6 weeks",
            "expired"			: "false",

            "schedule" : [
                {
                    "date"  	: "Tuesday",
                    "timeFrom"  : "5pm",
                    "timeTo"    : "6pm"
                },
                {
                    "date"  	: "Friday",
                    "timeFrom"  : "5pm",
                    "timeTo"    : "6pm"
                }
            ]
        }
    ],



    "reviewComment" 			: {

        "overallRating"  : "8",
        "reviews" : [
            {
                "id"            : "23023",
                "avatar"   		: "avatar/u3020_head3.jpg",
                "postedBy" 		: "MomWith2Kids",
                "postedDate"	: "03/04/2016",
                "review"        : "My young one took Mr Doh's drawing class, great inspirational class for 8 year old",
                "rating"        : "10",
                "comments"      : [
                    {
                        "id"            : "230231",
                        "avatar"   		: "avatar/u1322_head1.jpg",
                        "postedBy" 		: "Mamacass",
                        "postedDate"	: "03/05/2016",
                        "comment"       : "I considering taking my son this class, I wonder what is the overall class experience like? can you elaborate?"
                    },
                    {
                        "id"            : "230232",
                        "avatar"   		: "avatar/u3020_head3.jpg",
                        "postedBy" 		: "MomWith2Kids",
                        "postedDate"	: "03/08/2016",
                        "comment"       : "The class has a lot of student interactions even for a 25 student class, great group exercise"
                    }
                ]
            },

            {
                "id"            : "23022",
                "avatar"   		: "avatar/u4020_head1.jpg",
                "postedBy" 		: "AngryPapa",
                "postedDate"	: "01/02/2015",
                "review"         : "This class wasn't helping, the group exercise is very unnecessary, and that eat up 1/3 of the class time",
                "rating"        : "6",
                "comments"      : []
            }
        ]
    }


}