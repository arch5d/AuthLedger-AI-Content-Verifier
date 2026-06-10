// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ContentVerifier {
    struct Content {
        string hash; // Hash of content
        address creator; // Author's address
        bool isAI; // True if AI-generated, false if human-made
        uint256 timestamp; // Time of submission
    }

    mapping(string => Content) public contents;
    mapping(address => uint256) public creatorReputation; // Reputation system

    event ContentVerified(string indexed hash, address indexed creator, bool isAI, uint256 timestamp);
    event ReputationUpdated(address indexed creator, uint256 newReputation);

    function verifyContent(string memory _hash, bool _isAI) public {
        require(bytes(contents[_hash].hash).length == 0, "Content already verified");
        require(bytes(_hash).length > 0, "Hash cannot be empty");

        contents[_hash] = Content({
            hash: _hash,
            creator: msg.sender,
            isAI: _isAI,
            timestamp: block.timestamp
        });

        emit ContentVerified(_hash, msg.sender, _isAI, block.timestamp);
        updateReputation(msg.sender, _isAI); // Update reputation
    }

    function getContent(string memory _hash) public view returns (Content memory) {
        return contents[_hash];
    }

    function updateReputation(address _creator, bool _isAI) private {
        // Example: Increase reputation for human-made, decrease for AI (or adjust as needed)
        if (_isAI) {
            if (creatorReputation[_creator] > 0) {
              creatorReputation[_creator] -= 1;
            }
        } else {
            creatorReputation[_creator] += 2;
        }

        emit ReputationUpdated(_creator, creatorReputation[_creator]);
    }

    function getReputation(address _creator) public view returns (uint256) {
        return creatorReputation[_creator];
    }

    // Optional: Allow creators to update their content's AI status (with restrictions)
    function updateAIStatus(string memory _hash, bool _newIsAI) public {
        require(bytes(contents[_hash].hash).length > 0, "Content not verified");
        require(contents[_hash].creator == msg.sender, "Only creator can update status");
        require(contents[_hash].isAI != _newIsAI, "Status is already set to the new value");

        contents[_hash].isAI = _newIsAI;
        emit ContentVerified(_hash, msg.sender, _newIsAI, block.timestamp); // Re-emit event with updated info
        updateReputation(msg.sender, _newIsAI); // Update reputation
    }

    // Optional: Allow users to report content as falsely marked.
    function reportFalseStatus(string memory _hash) public {
        require(bytes(contents[_hash].hash).length > 0, "Content not verified");
        //Example of reputation decrease.
        if(contents[_hash].creator != msg.sender){
           creatorReputation[contents[_hash].creator] -= 1;
           emit ReputationUpdated(contents[_hash].creator, creatorReputation[contents[_hash].creator]);
        }
    }
}