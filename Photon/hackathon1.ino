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

#define ID 99
#define PROVIDER "BROWN_JESUS_INC"
#define INVENTORY 50
 
Adafruit_NeoPixel pixels(PIXEL_COUNT, PIXEL_PIN, PIXEL_TYPE);	// Create out “ring” object	
 
int pixelCounter = 0;                       // Used for choosing a specific LED
bool too_high = false;

int LED = D3;              // LED connected to digital pin D3
int analogPin = 2;       // potentiometer connected to analog pin A0
double val = 0;        // variable to store the read values
double temp_max = 86; //max temp desired
double temp;
int minutes = 0;
double data_array[144][2]; // 2 data points stored every 20 minutes for 24 hours then reset
int data_count = 0;
int data_count2 = 0;

double coords0 = 52.708172;
double coords1 = -2.754320;
int status = WiFi.RSSI(); //returns -127 to -1, indicating signal strength






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
//add time stuff
//add array stuff
//status
//id
//location
//temperature
//provider
//inventory

void setup()
{
    Serial.begin(9600);
	pinMode(PIXEL_PIN, OUTPUT);      // sets the ledPin as output
	pixels.begin();
	pixels.setBrightness(150);  
	Particle.variable("temp", temp);
	Particle.variable("too_high", too_high);
	
	Particle.variable("coords0", coords0);
	Particle.variable("coords1", coords1);
	Particle.variable("id", ID);
	Particle.variable("provider", PROVIDER);
	Particle.variable("inventory", INVENTORY);
	Particle.variable("status", status);
	//Particle.variable("data_collection", data_array);
	
	Time.zone(-4);
	Particle.syncTime();
}

void loop()
{
    status = WiFi.RSSI();
	val = analogRead(analogPin);  // read the analogPin values go from 0 to 4095
	//analogWrite(LED, val/16);  // Generate PWM from values from 0 to 255
	double voltage = val/4098*5;
	double Tc = 0.0195;
	double Voc = 0.4;
	temp = (voltage-0.4)/Tc;
	temp = temp*1.8; // C -> F
	if(temp>85){
	    switch_color(255, 0, 0);
	    too_high = true;
	   
	}
	 //Serial.println(temp);
	Serial.println(Time.hour()); //returns hour number 0-23
	minutes = Time.minute(); //returns minute 0-59
	double data_point[] = {minutes, temp};
	if(minutes % 20 == 0){
	    int data_point[] = {minutes, temp};
	    if(data_count<144){
	        
	        data_array[data_count][0] = data_point[0];
	        data_array[data_count][1] = data_point[1];
	    }
	    else{
	        data_count = 0;
	        data_array[data_count][0] = data_point[0];
	        data_array[data_count][1] = data_point[1];
	    }

	}
	
	
	delay(30000); //30 seconds
    
}



















