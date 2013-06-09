var str =  '<root><item><user id="123">Billie Joe</user>  <address><town>Choctaw Ridge</town><state abbr="MS">Mississippi</state>    </address></item><item> <user id="234">Becky Thompson</user><address> <town>Tupelo</town><state abbr="MS">Mississippi</state> </address> </item> </root>';

describe("When populating a json array from xml data; ", function() {
		var data = jQuery.parseXML( str );


        it("should convert xml into json", function() {

            var xml = data.getElementsByTagName('item')[0],
                full = data.getElementsByTagName('root')[0],
                json = window.xmlToJson(xml),
                jsonWithAttr = window.xmlToJson(xml, true),
                jsonFull = window.xmlToJson(full);

            expect( typeof json ).toBe( 'object' );
            expect( typeof jsonWithAttr ).toBe( 'object' );


        });

	});



    describe("When reading json values; ", function() {
        var data = jQuery.parseXML(str);


        it("should ignore attribute values", function() {

            var xml = data.getElementsByTagName('item')[0],
                full = data.getElementsByTagName('root')[0],
                json = window.xmlToJson(xml),
                jsonWithAttr = window.xmlToJson(xml, true),
                jsonFull = window.xmlToJson(full, true);

            expect( json['user'] ).toBe('Billie Joe');
            expect( json['user@id'] ).toBeUndefined();

        });

        it("should return attribute values when needed", function() {

            var xml = data.getElementsByTagName('item')[0],
                full = data.getElementsByTagName('root')[0],
                json = window.xmlToJson(xml),
                jsonWithAttr = window.xmlToJson(xml, true),
                jsonFull = window.xmlToJson(full, true);

            expect( jsonWithAttr['user'] ).toBe('Billie Joe');
            expect( jsonWithAttr['user@id'] ).toBe('123');



        });

        it("should return expected json values", function() {

            var xml = data.getElementsByTagName('item')[0],
                full = data.getElementsByTagName('root')[0],
                json = window.xmlToJson(xml),
                jsonWithAttr = window.xmlToJson(xml, true),
                jsonFull = window.xmlToJson(full, true);


            expect( jsonFull['item'][0]['user'] ).toBe('Billie Joe') ;
            expect( jsonFull['item'][1]['user'] ).toBe('Becky Thompson') ;
            expect( jsonFull['item'][0]['user@id'] ).toBe('123') ;
            expect( jsonFull['item'][1]['user@id'] ).toBe('234') ;


        });

    });
