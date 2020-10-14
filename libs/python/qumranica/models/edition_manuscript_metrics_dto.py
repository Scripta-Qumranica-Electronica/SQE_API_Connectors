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


class EditionManuscriptMetricsDTO(object):
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
        'ppi': 'int',
        'editor_id': 'int',
        'width': 'int',
        'height': 'int',
        'x_origin': 'int',
        'y_origin': 'int'
    }

    attribute_map = {
        'ppi': 'ppi',
        'editor_id': 'editorId',
        'width': 'width',
        'height': 'height',
        'x_origin': 'xOrigin',
        'y_origin': 'yOrigin'
    }

    def __init__(self, ppi=None, editor_id=None, width=None, height=None, x_origin=None, y_origin=None, local_vars_configuration=None):  # noqa: E501
        """EditionManuscriptMetricsDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._ppi = None
        self._editor_id = None
        self._width = None
        self._height = None
        self._x_origin = None
        self._y_origin = None
        self.discriminator = None

        self.ppi = ppi
        self.editor_id = editor_id
        self.width = width
        self.height = height
        self.x_origin = x_origin
        self.y_origin = y_origin

    @property
    def ppi(self):
        """Gets the ppi of this EditionManuscriptMetricsDTO.  # noqa: E501


        :return: The ppi of this EditionManuscriptMetricsDTO.  # noqa: E501
        :rtype: int
        """
        return self._ppi

    @ppi.setter
    def ppi(self, ppi):
        """Sets the ppi of this EditionManuscriptMetricsDTO.


        :param ppi: The ppi of this EditionManuscriptMetricsDTO.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and ppi is None:  # noqa: E501
            raise ValueError("Invalid value for `ppi`, must not be `None`")  # noqa: E501

        self._ppi = ppi

    @property
    def editor_id(self):
        """Gets the editor_id of this EditionManuscriptMetricsDTO.  # noqa: E501


        :return: The editor_id of this EditionManuscriptMetricsDTO.  # noqa: E501
        :rtype: int
        """
        return self._editor_id

    @editor_id.setter
    def editor_id(self, editor_id):
        """Sets the editor_id of this EditionManuscriptMetricsDTO.


        :param editor_id: The editor_id of this EditionManuscriptMetricsDTO.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and editor_id is None:  # noqa: E501
            raise ValueError("Invalid value for `editor_id`, must not be `None`")  # noqa: E501

        self._editor_id = editor_id

    @property
    def width(self):
        """Gets the width of this EditionManuscriptMetricsDTO.  # noqa: E501


        :return: The width of this EditionManuscriptMetricsDTO.  # noqa: E501
        :rtype: int
        """
        return self._width

    @width.setter
    def width(self, width):
        """Sets the width of this EditionManuscriptMetricsDTO.


        :param width: The width of this EditionManuscriptMetricsDTO.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and width is None:  # noqa: E501
            raise ValueError("Invalid value for `width`, must not be `None`")  # noqa: E501

        self._width = width

    @property
    def height(self):
        """Gets the height of this EditionManuscriptMetricsDTO.  # noqa: E501


        :return: The height of this EditionManuscriptMetricsDTO.  # noqa: E501
        :rtype: int
        """
        return self._height

    @height.setter
    def height(self, height):
        """Sets the height of this EditionManuscriptMetricsDTO.


        :param height: The height of this EditionManuscriptMetricsDTO.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and height is None:  # noqa: E501
            raise ValueError("Invalid value for `height`, must not be `None`")  # noqa: E501

        self._height = height

    @property
    def x_origin(self):
        """Gets the x_origin of this EditionManuscriptMetricsDTO.  # noqa: E501


        :return: The x_origin of this EditionManuscriptMetricsDTO.  # noqa: E501
        :rtype: int
        """
        return self._x_origin

    @x_origin.setter
    def x_origin(self, x_origin):
        """Sets the x_origin of this EditionManuscriptMetricsDTO.


        :param x_origin: The x_origin of this EditionManuscriptMetricsDTO.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and x_origin is None:  # noqa: E501
            raise ValueError("Invalid value for `x_origin`, must not be `None`")  # noqa: E501

        self._x_origin = x_origin

    @property
    def y_origin(self):
        """Gets the y_origin of this EditionManuscriptMetricsDTO.  # noqa: E501


        :return: The y_origin of this EditionManuscriptMetricsDTO.  # noqa: E501
        :rtype: int
        """
        return self._y_origin

    @y_origin.setter
    def y_origin(self, y_origin):
        """Sets the y_origin of this EditionManuscriptMetricsDTO.


        :param y_origin: The y_origin of this EditionManuscriptMetricsDTO.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and y_origin is None:  # noqa: E501
            raise ValueError("Invalid value for `y_origin`, must not be `None`")  # noqa: E501

        self._y_origin = y_origin

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
        if not isinstance(other, EditionManuscriptMetricsDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, EditionManuscriptMetricsDTO):
            return True

        return self.to_dict() != other.to_dict()