// This #include statement was automatically added by the Particle IDE.
#include <HttpClient.h>

// This #include statement was automatically added by the Particle IDE.
#include <neopixel.h>

#include <HttpClient.h>

unsigned int nextTime = 0;    // Next time to contact the server
HttpClient http;

http_header_t headers[] = {
    { "Accept" , "*/*"},
    { NULL, NULL } // NOTE: Always terminate headers will NULL
};

http_request_t request;
http_response_t response;

 
#define PIXEL_COUNT 35						// 24 Pixels on our ring
#define PIXEL_PIN D0						// Ring uses D6 as default pin
#define PIXEL_TYPE WS2812B					// Ring uses WS2812 Pixels
#define MIC_INPUT A0
 
Adafruit_NeoPixel pixels(PIXEL_COUNT, PIXEL_PIN, PIXEL_TYPE);	// Create out “ring” object	
int LED = D3; // LED connected to digital pin D3
int analogPin = 2; // potentiometer connected to analog pin A0
int pixelCounter = 0; // Used for choosing a specific LED

//constants
double status = 1;
double id = 1;
double upperTemp = 100; //set up upper bound of 100 deg
double lowerTemp = 80; //set up lower bound of 80 deg
double vaccineCount = 690;
double longitude = 42.2959;
double latitude = 71.7128;
String provider = "AstraXeneca"

double too_high = 0;
double too_low = 0;
double val = 0;        // variable to store the read values

double photonVar [10] = {status,id,0.0,upperTemp,lowerTemp,0.0,0.0,vaccineCount,longitude,latitude}
// 0:status, 1:id, 2:temp, 3:uppertemp, 4:lowerTemp, 5:too_high, 6:too_low, 7:vaccineCount, 8:longitude, 9:latitude

 void switch_color(int c1, int c2, int c3){
  // The first NeoPixel in a strand is #0, second is 1, all the way up
  // to the count of pixels minus one.
  for(int i=0; i<PIXEL_COUNT; i++) { // For each pixel...

    // pixels.Color() takes RGB values, from 0,0,0 up to 255,255,255
    // Here we're using a moderately bright green color:
    pixels.setPixelColor(i, pixels.Color(c1, c2, c3));
    
  } pixels.show();
      // Send the updated pixel colors to the hardware.
}

void setup()
{
    Serial.begin(9600);
	pinMode(PIXEL_PIN, OUTPUT);      // sets the ledPin as output
	pixels.begin();
	pixels.setBrightness(150);  
	Particle.variable("photonVar",photonVar)
	Particle.variable("provider",provider)
}

void loop()
{
	val = analogRead(analogPin);  // read the analogPin values go from 0 to 4095
	//analogWrite(LED, val/16);  // Generate PWM from values from 0 to 255
	double voltage = val/4096*4.64;
	double Tc = 0.0195;
	double Voc = 0.4;
	temp = (voltage-0.4)/Tc;
	photonVar[2] = temp*1.8 +32 -40; // C -> F

	if(photonVar[2] > photonVar[3]){ //Too Hot
		photonVar[5] = 1; //too_high = true
		photonVar[6] = 0; //too_low = false
		switch_color(255,0,0); //bad red
		Serial.println(photonVar[2])
	}
	else if (photonVar[2] > photonVar[4]){ //Normal Temp
		photonVar[5] = 0; //too_high = false
		photonVar[6] = 0; //too_low = false
		switch_color(0,255,0); //happy green
		Serial.println(photonVar[2])
	}
	else{ //Too Cold
		photonVar[5] = 0; //too_high = false
		photonVar[6] = 1; //too_low = true
		switch_color(0,0,255); //bad blue
		Serial.println(photonVar[2])
	}
	delay(100);
    
}

















