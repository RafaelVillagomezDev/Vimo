import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});


interface MapaLeafletProps {
    centro?: [number, number];
    zoom?: number;
    mensaje?: string;
    altura?: string; 
}

const MapaLeaflet: React.FC<MapaLeafletProps> = ({ 
    centro = [40.4167, -3.7033], 
    zoom = 13, 
    mensaje = "¡Ubicación encontrada!",
    altura = '500px'
}) => {
  return (
    <div 
      style={{ 
        height: altura, 
        width: '100%', 
        borderRadius: '12px', 
        overflow: 'hidden' 
      }}
    >
      <MapContainer 
        center={centro} 
        zoom={zoom} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={centro} icon={DefaultIcon}>
          <Popup>
            {mensaje}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapaLeaflet;