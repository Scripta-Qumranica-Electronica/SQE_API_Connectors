# coding: utf-8

"""
    SQE API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: v1
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from qumranica.configuration import Configuration


class CharacterShapeDTO(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'id': 'int',
        'character': 'str',
        'polygon': 'str',
        'image_url': 'str',
        'rotation': 'float',
        'attributes': 'list[str]'
    }

    attribute_map = {
        'id': 'id',
        'character': 'character',
        'polygon': 'polygon',
        'image_url': 'imageURL',
        'rotation': 'rotation',
        'attributes': 'attributes'
    }

    def __init__(self, id=None, character=None, polygon=None, image_url=None, rotation=None, attributes=None, local_vars_configuration=None):  # noqa: E501
        """CharacterShapeDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._id = None
        self._character = None
        self._polygon = None
        self._image_url = None
        self._rotation = None
        self._attributes = None
        self.discriminator = None

        self.id = id
        self.character = character
        self.polygon = polygon
        self.image_url = image_url
        if rotation is not None:
            self.rotation = rotation
        self.attributes = attributes

    @property
    def id(self):
        """Gets the id of this CharacterShapeDTO.  # noqa: E501


        :return: The id of this CharacterShapeDTO.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this CharacterShapeDTO.


        :param id: The id of this CharacterShapeDTO.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and id is None:  # noqa: E501
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id

    @property
    def character(self):
        """Gets the character of this CharacterShapeDTO.  # noqa: E501


        :return: The character of this CharacterShapeDTO.  # noqa: E501
        :rtype: str
        """
        return self._character

    @character.setter
    def character(self, character):
        """Sets the character of this CharacterShapeDTO.


        :param character: The character of this CharacterShapeDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and character is None:  # noqa: E501
            raise ValueError("Invalid value for `character`, must not be `None`")  # noqa: E501

        self._character = character

    @property
    def polygon(self):
        """Gets the polygon of this CharacterShapeDTO.  # noqa: E501


        :return: The polygon of this CharacterShapeDTO.  # noqa: E501
        :rtype: str
        """
        return self._polygon

    @polygon.setter
    def polygon(self, polygon):
        """Sets the polygon of this CharacterShapeDTO.


        :param polygon: The polygon of this CharacterShapeDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and polygon is None:  # noqa: E501
            raise ValueError("Invalid value for `polygon`, must not be `None`")  # noqa: E501

        self._polygon = polygon

    @property
    def image_url(self):
        """Gets the image_url of this CharacterShapeDTO.  # noqa: E501


        :return: The image_url of this CharacterShapeDTO.  # noqa: E501
        :rtype: str
        """
        return self._image_url

    @image_url.setter
    def image_url(self, image_url):
        """Sets the image_url of this CharacterShapeDTO.


        :param image_url: The image_url of this CharacterShapeDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and image_url is None:  # noqa: E501
            raise ValueError("Invalid value for `image_url`, must not be `None`")  # noqa: E501

        self._image_url = image_url

    @property
    def rotation(self):
        """Gets the rotation of this CharacterShapeDTO.  # noqa: E501


        :return: The rotation of this CharacterShapeDTO.  # noqa: E501
        :rtype: float
        """
        return self._rotation

    @rotation.setter
    def rotation(self, rotation):
        """Sets the rotation of this CharacterShapeDTO.


        :param rotation: The rotation of this CharacterShapeDTO.  # noqa: E501
        :type: float
        """

        self._rotation = rotation

    @property
    def attributes(self):
        """Gets the attributes of this CharacterShapeDTO.  # noqa: E501


        :return: The attributes of this CharacterShapeDTO.  # noqa: E501
        :rtype: list[str]
        """
        return self._attributes

    @attributes.setter
    def attributes(self, attributes):
        """Sets the attributes of this CharacterShapeDTO.


        :param attributes: The attributes of this CharacterShapeDTO.  # noqa: E501
        :type: list[str]
        """
        if self.local_vars_configuration.client_side_validation and attributes is None:  # noqa: E501
            raise ValueError("Invalid value for `attributes`, must not be `None`")  # noqa: E501

        self._attributes = attributes

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, CharacterShapeDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CharacterShapeDTO):
            return True

        return self.to_dict() != other.to_dict()
