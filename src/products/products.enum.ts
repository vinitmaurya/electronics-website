export enum Category {
    ACTIVE_COMPONENTS = "ACTIVE_COMPONENTS",
    PASSIVE_COMPONENTS = "PASSIVE_COMPONENTS ",
    SENSORS = "SENSORS",
    POWER_ELECTRONICS = "POWER_ELECTRONICS",
    LEDs = "LEDs",
    CIRCUIT_PROTECTION = "CIRCUIT_PROTECTION"
}
export enum ActiveComponentsSubCategories {
    Relays = "Relays",
    Diodes = "Diodes",
    BridgeRectifiers = "Bridge Rectifiers",
    CommunicationICs = "Communication ICs",
    VoltageRegulators = "Voltage Regulators",
    Transistors = "Transistors",
    MOSFETs = "MOSFETs",
    Crystal = "Crystal"
}

// Enum for PASSIVE_COMPONENTS subcategories
export enum PassiveComponentsSubCategories {
    Resistors = "Resistors",
    Capacitors = "Capacitors",
    Inductors = "Inductors",
    Fuses = "Fuses",
    Switches = "Switches",
    LEDDisplays = "LED Displays",
    Relays = "Relays",
    Diodes = "Diodes",
    PowerCords = "Power Cords",
    FuseHolders = "Fuse Holders",
    BananaSockets = "Banana Sockets",
    BananaPlugs = "Banana Plugs",
    MOVs = "MOVs"
}

// Enum for SENSORS subcategories
export enum SensorsSubCategories {
    TemperatureSensors = "Temperature Sensors",
    PressureSensors = "Pressure Sensors",
    OptoSensor = "Opto Sensor"
}

// Enum for POWER_ELECTRONICS subcategories
export enum PowerElectronicsSubCategories {
    SolidStateRelays = "Solid State Relays",
    HRCFuses = "HRC Fuses",
    BridgeRectifiers = "Bridge Rectifiers",
    ThermalPads = "Thermal Pads"
}

// Enum for LEDs subcategories
export enum LEDsSubCategories {
    LEDsForIndicators = "LEDs for Indicators",
    LEDsForLighting = "LEDs for Lighting",
    LEDsForLensReflectors = "LEDs for Lens/ Reflectors",
    LEDsForDrivers = "LEDs for Drivers"
}

// Enum for CIRCUIT_PROTECTION subcategories
export enum CircuitProtectionSubCategories {
    ResettableFuses = "Resettable fuses",
    MOVs = "MOVs",
    TMOVs = "TMOVs",
    LightningProtectionModules = "Lightning protection modules",
    GasDischargeTubes = "Gas Discharge Tubes"
}