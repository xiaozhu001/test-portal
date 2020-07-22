pragma solidity ^0.6.0;

contract CarContract6 {
    uint256 _gasoline;
    uint256 _bucket;
    int _gasolineType = 1;
    bool _doorStatus;
    
    enum DoorSwitch{ open, close }
    
    DoorSwitch _doorSwitch;
    
    struct CarInfo {
        string color;
        uint8 wheelNum;
    }
    
    CarInfo _carInfo;
    
    modifier whenDoorClose() {
        require(!_doorStatus, "door is not close");
        _;
        
    }
    
    modifier whenDoorSwitch() {
        if (!_doorStatus) {
            require(_doorSwitch == DoorSwitch.open, "door switch is close");
        }
        _;
    }
    
    event gasolineAlarm(uint256 gasoline);
    
    function startUp() public whenDoorClose {
        require(_gasoline >= 1, "gasoline is not haved");
        _gasoline = _gasoline - 1;
        if (_gasoline <= 5) {
            emit gasolineAlarm(_gasoline);
        }
    }
    
    function getGasoline() public view returns(uint256 gasoline) {
        return _gasoline;
    }
    
    function addGasoline(uint256 gasoline) public {
        _gasoline += gasoline;
    }
    
    function changeGasoline() public {
        require(_gasoline != 0 || _bucket != 0, "can not change");
        
        if (_gasoline == 0) {
            _gasoline = _bucket;
            _bucket = 0;
        } else if (_bucket == 0) {
            _bucket = _gasoline;
            _gasoline = 0;
        } else {
            uint256 __tempBucket = _gasoline;
            _gasoline = _bucket;
            _bucket = __tempBucket;
        }
        
        _gasolineType = -1 * _gasolineType;
    }
    
    function getGasolineType() public view returns(int gasolineType) {
        return _gasolineType;
    }
    
    
    function getDoorStatus() public view returns(bool doorStatus) {
        return _doorStatus;
    }
    
    function changeDoorStatus() public {
        _doorStatus = ! _doorStatus;
    }
    
    function setCarInfo(string memory color, uint8 wheelNum) public {
        _carInfo.color = color;
        _carInfo.wheelNum = wheelNum;
        
        //_carInfo = CarInfo(color, wheelNum);
    }
    
    function getCarInfo() public view returns(string memory color, int wheelNum) {
        color = _carInfo.color;
        wheelNum = _carInfo.wheelNum;
    }
    
    function setDoorSwitch(DoorSwitch doorSwitch) public {
        _doorSwitch = doorSwitch; 
    }
}