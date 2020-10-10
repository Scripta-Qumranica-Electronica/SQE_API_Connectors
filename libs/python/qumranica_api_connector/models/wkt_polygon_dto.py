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

from qumranica_api_connector.configuration import Configuration


class WktPolygonDTO(object):
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
        'wkt_polygon': 'str'
    }

    attribute_map = {
        'wkt_polygon': 'wktPolygon'
    }

    def __init__(self, wkt_polygon=None, local_vars_configuration=None):  # noqa: E501
        """WktPolygonDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._wkt_polygon = None
        self.discriminator = None

        self.wkt_polygon = wkt_polygon

    @property
    def wkt_polygon(self):
        """Gets the wkt_polygon of this WktPolygonDTO.  # noqa: E501


        :return: The wkt_polygon of this WktPolygonDTO.  # noqa: E501
        :rtype: str
        """
        return self._wkt_polygon

    @wkt_polygon.setter
    def wkt_polygon(self, wkt_polygon):
        """Sets the wkt_polygon of this WktPolygonDTO.


        :param wkt_polygon: The wkt_polygon of this WktPolygonDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and wkt_polygon is None:  # noqa: E501
            raise ValueError("Invalid value for `wkt_polygon`, must not be `None`")  # noqa: E501

        self._wkt_polygon = wkt_polygon

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
        if not isinstance(other, WktPolygonDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, WktPolygonDTO):
            return True

        return self.to_dict() != other.to_dict()
