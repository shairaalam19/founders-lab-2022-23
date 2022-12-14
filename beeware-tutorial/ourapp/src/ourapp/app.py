# """
# Founders Lab Mobile App
# """
# import toga
# from toga.style import Pack
# from toga.style.pack import COLUMN, ROW


# class OurApp(toga.App):

#     def startup(self):
#         """
#         Construct and show the Toga application.

#         Usually, you would add your application to a main content box.
#         We then create a main window (with a name matching the app), and
#         show the main window.
#         """
#         main_box = toga.Box()

#         self.main_window = toga.MainWindow(title=self.formal_name)
#         self.main_window.content = main_box
#         self.main_window.show()


# def main():
#     return OurApp()

"""
My first application
"""
import toga
from toga.style import Pack
from toga.style.pack import COLUMN, ROW, CENTER

# Modifying Branch 

# Sample Startup ---------------------------------------------
# class HelloWorld(toga.App):

#     def startup(self):
#         """
#         Construct and show the Toga application.

#         Usually, you would add your application to a main content box.
#         We then create a main window (with a name matching the app), and
#         show the main window.
#         """
#         main_box = toga.Box()

#         self.main_window = toga.MainWindow(title=self.formal_name)
#         self.main_window.content = main_box
#         self.main_window.show()

class HelloWorld(toga.App):
    def startup(self):
        # main_box = toga.Box(style=Pack(direction=COLUMN))

        # name_label = toga.Label(
        #     'Your name: ',
        #     style=Pack(padding=(0, 5))
        # )
        # self.name_input = toga.TextInput(style=Pack(flex=1))

        # name_box = toga.Box(style=Pack(direction=ROW, padding=5))
        # name_box.add(name_label)
        # name_box.add(self.name_input)

        # button = toga.Button(
        #     'Say Hello!',
        #     on_press=self.say_hello,
        #     style=Pack(padding=5)
        # )

        # main_box.add(name_box)
        # main_box.add(button)

        # self.main_window = toga.MainWindow(title=self.formal_name)
        # self.main_window.content = main_box
        # self.main_window.show()

        # IMAGE -------------------

        self.main_window = toga.MainWindow(title=self.name)

        box = toga.Box()
        # box = toga.Box(style=Pack(alignment=CENTER, direction=COLUMN))
        box.style.padding = 40
        box.style.update(alignment=CENTER)
        box.style.update(direction=COLUMN)

        # image from local path
        # load brutus.png from the package
        # We set the style width/height parameters for this one
        image_from_path = toga.Image("resources/Coach Connect Logo.png")
        imageview_from_path = toga.ImageView(image_from_path)
        # imageview_from_path.style.update(height=1080)
        box.add(imageview_from_path)

        name_label = toga.Label(
            'Your name: ',
            style=Pack(padding=(0, 5))
        )
        self.name_input = toga.TextInput(style=Pack(flex=1))

        name_box = toga.Box(style=Pack(direction=ROW, padding=5))
        name_box.add(name_label)
        name_box.add(self.name_input)

        button = toga.Button(
            'Say Hello!',
            on_press=self.say_hello,
            style=Pack(padding=-7.5, direction=ROW),
        )

        box.add(name_box)
        box.add(button)

        self.main_window.content = box
        self.main_window.show()

    def say_hello(self, widget):
        print("Hello,", self.name_input.value)


def main():
    return HelloWorld()
